import {
  mapSpaceAliasToIndex,
  MapSpaceAliasToIndexProps,
} from "./mapSpaceAliasToIndex";

describe("mapSpaceAliasToIndex", () => {
  const testData: [MapSpaceAliasToIndexProps, number[] | {}][] = [
    [{space: "small"}, 3],
    [{space: ["small", "large"]}, [3, 5]],
    [
      {
        space: {
          lg: "large",
          md: "medium",
          sm: "small",
          xl: "xxlarge",
          xs: "none",
        },
      },
      {lg: 5, md: 4, sm: 3, xl: 7, xs: 0},
    ],
    [{space: "small", isNegative: true}, -3],
    [{space: ["small", "large"], isNegative: true}, [-3, -5]],
    [
      {
        space: {
          lg: "large",
          md: "medium",
          sm: "small",
          xl: "xxlarge",
          xs: "none",
        },
        isNegative: true,
      },
      {lg: -5, md: -4, sm: -3, xl: -7, xs: -0},
    ],
  ];

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(mapSpaceAliasToIndex(props)).toEqual(expected);
  });
});
