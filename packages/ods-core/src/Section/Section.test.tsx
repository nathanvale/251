import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Placeholder } from "../Placeholder/Placeholder";
import { Section } from "./Section";

test("It sets the grey background correctly", () => {
  const { container } = render(
    <Section backgroundColor="grey">
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>,
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.backgroundColor).toEqual("rgb(80, 80, 80)");
});

test("It sets the white background correctly", () => {
  const { container } = render(
    <Section backgroundColor="white">
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>,
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
    </Section>,
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.backgroundColor).toEqual("transparent");
});

test("should have no max-width if fluidity is set to full-width", () => {
  const { container } = render(
    <Section fluidity="full-width">
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Section>,
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.maxWidth).toEqual("");
});

test("should hide gutters if hideGutter is true", () => {
  const { container } = render(
    <Section hideGutter={true}>
      <Placeholder />
    </Section>,
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.paddingLeft).toEqual("0px");
  expect(style.paddingRight).toEqual("0px");
});

test("should have gutters by default", () => {
  const { container } = render(
    <Section>
      <Placeholder />
    </Section>,
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.paddingLeft).toEqual("16px");
  expect(style.paddingRight).toEqual("16px");
});

test("should stretch the height to full if stretchY is true", () => {
  const { container } = render(
    <Section stretchY>
      <Placeholder />
    </Section>,
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.height).toEqual("100%");
});

test("should not stretch the height by default", () => {
  const { container } = render(
    <Section>
      <Placeholder />
    </Section>,
  );
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.height).toEqual("");
});
