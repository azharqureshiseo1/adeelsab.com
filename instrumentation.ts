/**
 * Runs once when the Node.js server starts (`next start`), not during `next build`.
 *
 * Checks server environment variables and fails loudly in the logs. It does not
 * crash the process: the marketing pages are static and must stay online even if a
 * secret is missing. The waitlist route itself throws the same error on use.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const { REQUIRED_DB_ENV, REQUIRED_MAIL_ENV, requireEnv } = await import("./lib/env");
  for (const [keys, purpose] of [
    [REQUIRED_DB_ENV, "storing waitlist leads (Supabase)"],
    [REQUIRED_MAIL_ENV, "lead notification emails (SMTP)"],
  ] as const) {
    try {
      requireEnv(keys, purpose);
    } catch (err) {
      console.error(`\n==== STARTUP CONFIGURATION ERROR ====\n${(err as Error).message}\n`);
    }
  }
}
