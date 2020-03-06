import { cssLengthToString } from "./cssLengthToString";

describe("cssLengthToString", () => {
  const testData = [[0, "0px"], [10, "10px"], ["10px", "10px"]] as const;

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(cssLengthToString(props)).toEqual(expected);
  });
});
