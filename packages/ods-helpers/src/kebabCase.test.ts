import { kebabCase } from "./kebabCase";

describe("kebabCase()", () => {
  test(`should return "" it if is an empty string`, () => {
    expect(kebabCase("")).toBe("");
  });
  test(`should return kebab-case if input is in CapitalCase`, () => {
    expect(kebabCase("CheckboxGroup")).toBe("checkbox-group");
  });
  test(`should return kebab-case if input is in camelCase`, () => {
    expect(kebabCase("checkboxGroup")).toBe("checkbox-group");
  });
  test(`should return kebab-case if input is already in kebab-case`, () => {
    expect(kebabCase("checkbox-group")).toBe("checkbox-group");
  });
  test(`should return kebab-case if part of input is already in kebab-case`, () => {
    expect(kebabCase("checkboxGroup-base")).toBe("checkbox-group-base");
  });
  test(`should treat space as a kebab separator as well`, () => {
    expect(kebabCase("checkboxGroup base")).toBe("checkbox-group-base");
  });
});
