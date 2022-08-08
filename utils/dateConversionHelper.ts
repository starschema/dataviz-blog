export function dateToNiceString(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ISODateStringToDate(dateString: string) {
  return new Date(dateString);
}
