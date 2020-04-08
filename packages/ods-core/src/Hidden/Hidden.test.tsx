import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Hidden } from "./Hidden";
import { Placeholder } from "..";

test("it renders a Hidden", () => {
  const { container } = render(
    <Hidden>
      <Placeholder label="Not hidden" />
    </Hidden>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides components below the md breakpoint", () => {
  const { container } = render(
    <Hidden below="md">
      <Placeholder label="Hidden below md." />
    </Hidden>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides components above the sm breakpoint", () => {
  const { container } = render(
    <Hidden above="sm">
      <Placeholder label="Hidden above sm." />
    </Hidden>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides text nodes below md", () => {
  const { container } = render(
    <span>
      The following text node is hidden below md:
      <Hidden below="md" inline={true}>
        Hidden below md.
      </Hidden>
    </span>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides text nodes above md", () => {
  const { container } = render(
    <span>
      The following text node is hidden above md:
      <Hidden above="md" inline={true}>
        Hidden above md.
      </Hidden>
    </span>
  );
  expect(container.firstChild).toMatchSnapshot();
});
