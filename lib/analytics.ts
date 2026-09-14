declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event if analytics is loaded. Safe to call anywhere on the client. */
export function track(event: string, params: Record<string, string | number | undefined> = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
