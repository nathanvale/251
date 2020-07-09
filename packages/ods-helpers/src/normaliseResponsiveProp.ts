import { ResponsiveProp } from "@origin-digital/ods-types";

export const normaliseResponsiveProp = <Keys extends string | number>(
  value: ResponsiveProp<Keys>
): Readonly<
  [
    Keys | undefined,
    Keys | undefined,
    Keys | undefined,
    Keys | undefined,
    Keys | undefined
  ]
> => {
  if (typeof value === "string" || typeof value === "number") {
    return [value, value, value, value, value];
  }

  if ("length" in value) {
    const { length } = value;

    if (length === 2) {
      const [mobileValue, desktopValue] = value;
      return [
        mobileValue,
        mobileValue,
        mobileValue,
        desktopValue,
        desktopValue,
      ];
    }

    if (length === 1) {
      const [mobileValue] = value;
      return [mobileValue, mobileValue, mobileValue, mobileValue, mobileValue];
    }

    throw new Error(`Invalid responsive prop length: ${JSON.stringify(value)}`);
  }

  if (value instanceof Object) {
    return [value.xs, value.sm, value.md, value.lg, value.xl];
  }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`);
};
