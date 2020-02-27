import React from "react";
import {render} from "@origin-digital/ods-testing-library";
import {Card} from "../Card/Card";

test("it renders a card", () => {
  const {container} = render(<Card />);
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders a card with custom data-id", () => {
  const {container} = render(<Card data-id="myId" />);
  expect(container.firstChild).toHaveAttribute("data-id", "myId");
});

test("it renders a card with medium padding", () => {
  const {container} = render(<Card padding="medium" />);
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders a card with large padding", () => {
  const {container} = render(<Card padding="large" />);
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders a card with a selected background color", () => {
  const {container} = render(<Card padding="large" backgroundColor="grey4" />);
  expect(container.firstChild).toMatchSnapshot();
});
