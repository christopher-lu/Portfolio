/**
 * Formats an ISO month string (YYYY-MM) into a human-readable
 * month and year (e.g. "2024-01" -> "January 2024").
 */
export function formatMonthYear(date: string): string {
  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1));
}