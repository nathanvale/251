import React from "react";
import {
  render,
  queryAllByAttribute,
} from "@origin-digital/ods-testing-library";
import { Placeholder } from "../Placeholder/Placeholder";
import { Stack } from "./Stack";

const RenderNull = () => null;

test("It can stack", () => {
  const { container } = render(
    <Stack>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Stack>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can distribute space", () => {
  const { container } = render(
    <Stack space="xxlarge">
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Stack>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can distribute space with null children", () => {
  const { container } = render(
    <Stack space="xxlarge">
      <RenderNull />
      <Placeholder />
      <RenderNull />
      <Placeholder />
      <RenderNull />
      <Placeholder />
      <RenderNull />
    </Stack>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It adds dividers", () => {
  const { container } = render(
    <Stack space="xxlarge" dividers>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Stack>
  );
  expect(container.firstChild).toMatchSnapshot();
});
test("It does not add dividers if there is only 1 child", () => {
  const { container } = render(
    <Stack space="medium" dividers>
      <Placeholder />
    </Stack>
  );
  expect(container.children).toHaveLength(1);
});

test("It can right-align components", () => {
  const { container } = render(
    <Stack alignX="right">
      <Placeholder width="120px" />
      <Placeholder width="120px" />
    </Stack>
  );
  const columnsEl = queryAllByAttribute("data-id", container, "stack-child")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("flex-end");
});

test("It can center-align components", () => {
  const { container } = render(
    <Stack alignX="center">
      <Placeholder width="120px" />
      <Placeholder width="120px" />
    </Stack>
  );
  const columnsEl = queryAllByAttribute("data-id", container, "stack-child")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("center");
});

test("It can left-align children", () => {
  const { container } = render(
    <Stack alignX="left">
      <Placeholder data-id="childElement" width="120px" />
    </Stack>
  );
  const columnsEl = queryAllByAttribute("data-id", container, "stack-child")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("flex-start");
});

test("It adds data-id", () => {
  const dom = render(
    <Stack data-id="MyCustomStack">
      <Placeholder />
      <Placeholder />
    </Stack>
  );

  expect(
    queryAllByAttribute("data-id", dom.container, "MyCustomStack")
  ).toHaveLength(1);
});
