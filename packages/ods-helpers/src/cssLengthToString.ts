type CSSLength = number | string;

export function cssLengthToString(value: CSSLength): string {
  return typeof value === "number" ? `${value}px` : value;
}
