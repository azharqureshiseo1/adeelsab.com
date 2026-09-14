import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { REQUIRED_MAIL_ENV, requireEnv } from "./env";
import type { WaitlistInput } from "./validate";

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;
  requireEnv(REQUIRED_MAIL_ENV, "lead notification emails (SMTP)");
  const port = Number(process.env.SMTP_PORT);
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 120);

/** Plain-text lead notification. Throws on failure — callers must catch. */
export async function sendLeadNotification(lead: WaitlistInput): Promise<void> {
  const lines = [
    `New AdeelSab waitlist lead`,
    ``,
    `Name:           ${lead.full_name}`,
    `WhatsApp:       ${lead.whatsapp}  (https://wa.me/${lead.whatsapp.replace("+", "")})`,
    `City:           ${lead.city}`,
    `Joining as:     ${lead.business_type}`,
    `Category:       ${lead.category ?? "—"}`,
    `Monthly orders: ${lead.monthly_volume ?? "—"}`,
    `Language:       ${lead.locale}`,
    `Page:           ${lead.source_path ?? "—"}`,
    ``,
    `Message:`,
    lead.message ?? "—",
  ];
  await getTransporter().sendMail({
    from: `"AdeelSab Website" <${process.env.SMTP_USER}>`,
    to: process.env.LEAD_NOTIFY_TO,
    subject: oneLine(`Waitlist: ${lead.full_name} · ${lead.business_type} · ${lead.city}`),
    text: lines.join("\n"),
  });
}
