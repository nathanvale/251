import React from "react";
import {render} from "@origin-digital/ods-testing-library";
import {Hidden} from "./Hidden";
import {Placeholder} from "..";

test("it renders a Hidden", () => {
  const {container} = render(
    <Hidden>
      <Placeholder>Not hidden</Placeholder>
    </Hidden>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides components below the md breakpoint", () => {
  const {container} = render(
    <Hidden below="md">
      <Placeholder>Hidden below md.</Placeholder>
    </Hidden>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides components above the sm breakpoint", () => {
  const {container} = render(
    <Hidden above="sm">
      <Placeholder>Hidden above sm.</Placeholder>
    </Hidden>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides text nodes below md", () => {
  const {container} = render(
    <Placeholder>
      The following text node is hidden below md:
      <Hidden below="md" inline={true}>
        Hidden below md.
      </Hidden>
    </Placeholder>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it hides text nodes above md", () => {
  const {container} = render(
    <Placeholder>
      The following text node is hidden above md:
      <Hidden above="md" inline={true}>
        Hidden above md.
      </Hidden>
    </Placeholder>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
