type ValueType = boolean | null | undefined | number | string | object;
type IsNumberFn = (value: ValueType) => boolean;

export const isNumber: IsNumberFn = (value) =>
  !Number.isNaN(parseInt(`${value}`, 10));
