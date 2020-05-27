import { ResponsiveProp } from "@origin-digital/ods-types";
import { mapToStyledSystem } from "./mapToStyledSystem";

describe("mapToStyledSystem", () => {
  const testData: [ResponsiveProp<any>, any][] = [
    [undefined, undefined],
    ["small", "small"],
    [
      ["small", "large"],
      ["small", "small", "small", "large", "large"],
    ],
    [
      {
        lg: "large",
        md: "medium",
        sm: "small",
        xl: "xxlarge",
        xs: "none",
      },
      ["none", "small", "medium", "large", "xxlarge"],
    ],
  ];

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(mapToStyledSystem(props)).toEqual(expected);
  });
});
