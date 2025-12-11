/**
 * Get YYYY-MM-DD string in Asia/Jakarta timezone for a given Date object.
 * @param d Date object
 * @returns string formatted as YYYY-MM-DD
 */
export const getJakartaYMD = (d: Date): string => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(d)
    .reduce((acc: Record<string, string>, p) => {
      acc[p.type] = p.value;
      return acc;
    }, {} as Record<string, string>);
  return `${parts.year}-${parts.month}-${parts.day}`;
};
