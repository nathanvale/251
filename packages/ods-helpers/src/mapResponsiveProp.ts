import { ResponsiveProp } from "@origin-digital/ods-types";

export const mapResponsiveProp = <
  Keys extends string | number,
  MappedValues extends string
>(
  value: ResponsiveProp<Keys> | undefined,
  valueMap: Record<Keys, MappedValues>
): ResponsiveProp<MappedValues> | undefined => {
  if (value === undefined) {
    return undefined;
  }

  // If it's not a responsive prop, just map it directly
  if (typeof value === "string" || typeof value === "number") {
    return valueMap[value];
  }

  if ("length" in value) {
    const { length } = value;
    if (length === 2) {
      const [mobileValue, desktopValue] = value;
      return [valueMap[mobileValue], valueMap[desktopValue]];
    }
  } else if (value instanceof Object) {
    return {
      xs: valueMap[value.xs!],
      sm: valueMap[value.sm!],
      md: valueMap[value.md!],
      lg: valueMap[value.lg!],
      xl: valueMap[value.xl!],
    };
  }
  return undefined;
};
