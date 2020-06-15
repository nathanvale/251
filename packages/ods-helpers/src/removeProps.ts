export function removeProps<T>(obj: T, keysToRemove: (keyof T)[]) {
  return (Object.keys(obj) as (keyof T)[])
    .filter((propName: keyof T) => !keysToRemove.includes(propName))
    .reduce((propDecObj: Partial<T>, propName: any) => {
      // @ts-ignore
      propDecObj[propName] = obj[propName];
      return propDecObj;
    }, {} as Partial<T>);
}
