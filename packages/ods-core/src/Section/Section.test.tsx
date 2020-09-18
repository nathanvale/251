import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Placeholder } from "../Placeholder";
import { Section, getResponsiveSpace, getResponsiveFluidity } from "./Section";

test("hideGutter is responsive with a Boolean", () => {
  const result = getResponsiveSpace(false);
  expect(result).toBe("medium");
});

test("hideGutter is responsive with a Boolean 2", () => {
  const result = getResponsiveSpace(true);
  expect(result).toBe("none");
});

test("hideGutter is responsive with an array", () => {
  const result = getResponsiveSpace([false, true]);
  expect(result).toEqual(["medium", "none"]);
});

test("hideGutter is responsive with an array 2", () => {
  const result = getResponsiveSpace([true, false]);
  expect(result).toEqual(["none", "medium"]);
});

test("hideGutter is responsive with an object", () => {
  const result = getResponsiveSpace({
    xs: false,
    sm: true,
    md: false,
    lg: true,
    xl: false,
  });
  expect(result).toEqual({
    xs: "medium",
    sm: "none",
    md: "medium",
    lg: "none",
    xl: "medium",
  });
});

test("hideGutter is responsive with an simple object", () => {
  const result = getResponsiveSpace({
    xs: false,
    lg: true,
  });
  expect(result).toEqual({
    xs: "medium",
    sm: undefined,
    md: undefined,
    lg: "none",
    xl: undefined,
  });
});

test("fluidity is responsive with an object", () => {
  const result = getResponsiveFluidity({
    xs: false,
    sm: true,
    md: false,
    lg: true,
    xl: false,
  });
  expect(result).toEqual({
    xs: false,
    sm: true,
    md: false,
    lg: true,
    xl: false,
  });
});

test("fluidity is responsive with a boolean (true)", () => {
  const result = getResponsiveFluidity(true);
  expect(result).toEqual({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
  });
});

test("fluidity is responsive with a boolean (false)", () => {
  const result = getResponsiveFluidity(false);
  expect(result).toEqual({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });
});

test("fluidity is false by default", () => {
  const result = getResponsiveFluidity(undefined);
  expect(result).toEqual({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });
});

test("It sets the grey50 background correctly", () => {
  const { container } = render(
    <Section backgroundColor="grey50">
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.backgroundColor).toEqual("rgb(248, 248, 248)");
});

test("It sets the white background correctly", () => {
  const { container } = render(
    <Section backgroundColor="white">
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.backgroundColor).toEqual("white");
});

test("It sets the transparent background if no background is provided", () => {
  const { container } = render(
    <Section>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.backgroundColor).toEqual("white");
});

test("should have no max-width if fluidity is set to true", () => {
  const { container } = render(
    <Section fluidity={true}>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(
    container.firstChild!.firstChild as Element
  );
  expect(style.maxWidth).toEqual("");
});

test("should have max-width of 1140px if fluidity is set to false", () => {
  const { container } = render(
    <Section fluidity={false}>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(
    container.firstChild!.firstChild as Element
  );
  expect(style.maxWidth).toEqual("1140px");
});

test("should hide gutters if hideGutter is true", () => {
  const { container } = render(
    <Section hideGutter={true}>
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.paddingLeft).toEqual("0px");
  expect(style.paddingRight).toEqual("0px");
});

test("should have gutters by default", () => {
  const { container } = render(
    <Section>
      <Placeholder />
    </Section>
  );

  const subContainer = container.firstChild && container.firstChild.firstChild;
  const style = window.getComputedStyle(subContainer as Element);
  expect(style.paddingLeft).toEqual("16px");
  expect(style.paddingRight).toEqual("16px");
});

test("should stretch the height to full if stretchY is true", () => {
  const { container } = render(
    <Section stretchY>
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.height).toEqual("100%");
});

test("should not stretch the height by default", () => {
  const { container } = render(
    <Section>
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.height).toEqual("");
});

test("should show paddingY none", () => {
  const { container } = render(
    <Section paddingY="none">
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.padding).toEqual("0px 0px 0px 0px");
});

test("should show paddingY small", () => {
  const { container } = render(
    <Section>
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.padding).toEqual("32px 0px 32px 0px");
});

test("should show paddingY medium", () => {
  const { container } = render(
    <Section paddingY="medium">
      <Placeholder />
    </Section>
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.padding).toEqual("32px 0px 32px 0px");
});
