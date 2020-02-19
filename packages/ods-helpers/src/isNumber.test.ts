import {isNumber} from "./isNumber";

describe("isNumber", () => {
  const testData = [
    [10, true],
    [-10, true],
    ["string", false],
    [{}, false],
    [false, false],
  ] as const;

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(isNumber(props)).toEqual(expected);
  });
});
