export const sliceString = (string) =>
  string.length > 11 ? string.slice(0, 11) + "..." : string;
