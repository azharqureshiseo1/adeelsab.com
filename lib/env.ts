import "server-only";

/** Needed to store leads. The waitlist cannot work without these. */
export const REQUIRED_DB_ENV = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"] as const;
/** Needed for lead notification emails. Missing values never fail a submission. */
export const REQUIRED_MAIL_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "LEAD_NOTIFY_TO"] as const;

export function missingEnv(keys: readonly string[]): string[] {
  return keys.filter((k) => !process.env[k]?.trim());
}

/** Throws a clear, actionable error naming every missing variable. */
export function requireEnv(keys: readonly string[], purpose: string): void {
  const missing = missingEnv(keys);
  if (missing.length > 0) {
    throw new Error(
      `[env] Missing required environment variable(s) for ${purpose}: ${missing.join(", ")}. ` +
        `Add them in hPanel → Websites → your Node.js app → Environment Variables, then redeploy.`,
    );
  }
}
