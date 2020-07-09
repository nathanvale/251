import { SpaceVariants } from "@origin-digital/ods-types";
import { normaliseResponsiveProp } from "./normaliseResponsiveProp";

describe("normaliseResponsiveProp", () => {
  test("it should normalise a string", () => {
    const result = normaliseResponsiveProp<SpaceVariants>("small");
    expect(result).toEqual(["small", "small", "small", "small", "small"]);
  });

  test("it should normalise a 2 element array", () => {
    const result = normaliseResponsiveProp<SpaceVariants>(["small", "large"]);
    expect(result).toEqual(["small", "small", "small", "large", "large"]);
  });

  test("it should normalise an obj", () => {
    const result = normaliseResponsiveProp<SpaceVariants>({ lg: "large" });
    expect(result).toEqual([
      undefined,
      undefined,
      undefined,
      "large",
      undefined,
    ]);
  });
});
