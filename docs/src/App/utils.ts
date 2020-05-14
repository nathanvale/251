export function firstLetterUpper(str: string) {
  const newString = str
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  return newString;
}
