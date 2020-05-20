import { mapResponsiveProp } from "./mapResponsiveProp";

describe("mapResponsiveProp", () => {
  const mockMap = {
    foo: "mappedFoo",
    bar: "mappedBar",
    baz: "mappedBaz",
  };

  const testData = [
    ["foo", mockMap, "mappedFoo"],
    [["foo", "foo"], mockMap, ["mappedFoo", "mappedFoo"]],
    [["foo", "foo", "foo"], mockMap, undefined],
    [
      { xs: "foo", lg: "foo" },
      mockMap,
      {
        lg: "mappedFoo",
        md: undefined,
        sm: undefined,
        xl: undefined,
        xs: "mappedFoo",
      },
    ],
  ] as const;

  test.each(testData)(
    "%p returns %p",
    (props: any, map: any, expected: any) => {
      expect(mapResponsiveProp(props, map)).toEqual(expected);
    }
  );
});
