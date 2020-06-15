import { removeProps } from "./removeProps";

describe("removeProps()", () => {
  test("it removes props when they are available", () => {
    const target = {
      a: "x",
      b: "y",
      c: "z",
      d: true,
    };

    expect(removeProps(target, ["b", "c"])).toEqual({
      a: "x",
      d: true,
    });
  });

  test("it ignores it when no props provided", () => {
    const target = {
      a: "x",
      b: "y",
      c: "z",
      d: true,
    };

    expect(removeProps(target, [])).toEqual(target);
  });
});
