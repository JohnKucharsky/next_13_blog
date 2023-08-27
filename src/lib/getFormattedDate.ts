export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("ru", { dateStyle: "long" }).format(
    new Date(dateString),
  );
}
