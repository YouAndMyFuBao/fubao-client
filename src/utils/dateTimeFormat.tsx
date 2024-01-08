export default function DateTimeFormat(OriginalDateTime: string): string {
  const dateTime = new Date(OriginalDateTime);

  const outputDateTime = `${dateTime.getFullYear()}. ${
    dateTime.getMonth() + 1
  }. ${dateTime.getDay()}`;

  return outputDateTime.toString();
}
