import React from "react";
import {render, queryAllByAttribute} from "@origin-digital/ods-testing-library";
import {Placeholder} from "../Placeholder/Placeholder";
import {Stack} from "./Stack";

test("It can stack", () => {
  const {container} = render(
    <Stack>
      <Placeholder backgroundColor="red" />
      <Placeholder backgroundColor="orange" />
      <Placeholder backgroundColor="blue" />
    </Stack>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can distribute space", () => {
  const {container} = render(
    <Stack space="xxlarge">
      <Placeholder backgroundColor="red" />
      <Placeholder backgroundColor="orange" />
      <Placeholder backgroundColor="blue" />
    </Stack>,
  );

  const stackChildren = container.firstChild!.childNodes;

  // All children except the last one have padding-bottom set to the value of space prop.
  for (let childIdx = 0; childIdx < stackChildren.length - 1; childIdx++) {
    const wrapperEl = stackChildren[childIdx];
    const style = window.getComputedStyle(wrapperEl as Element);
    expect(style.paddingBottom).toEqual("48px");
  }

  // last element has padding-bottom set to 0.
  const style = window.getComputedStyle(stackChildren[
    stackChildren.length - 1
  ] as Element);
  expect(style.paddingBottom).toEqual("0px");
});

test("It adds dividers", () => {
  const {container} = render(
    <Stack space="xxlarge" dividers>
      <Placeholder backgroundColor="red" />
      <Placeholder backgroundColor="orange" />
      <Placeholder backgroundColor="blue" />
    </Stack>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
test("It does not add dividers if there is only 1 child", () => {
  const {container} = render(
    <Stack space="medium" dividers>
      <Placeholder backgroundColor="blue" />
    </Stack>,
  );
  expect(container.children).toHaveLength(1);
});

test("It stretches children by default", () => {
  const {container} = render(
    <Stack>
      <Placeholder backgroundColor="red" />
      <Placeholder backgroundColor="orange" />
    </Stack>,
  );

  const columnsEl = queryAllByAttribute("data-id", container, "stack")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("stretch");
});

test("It can right-align components", () => {
  const {container} = render(
    <Stack alignX="right">
      <Placeholder backgroundColor="red" />
      <Placeholder backgroundColor="orange" />
    </Stack>,
  );
  const columnsEl = queryAllByAttribute("data-id", container, "stack")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("flex-end");
});

test("It can center-align components", () => {
  const {container} = render(
    <Stack alignX="center">
      <Placeholder backgroundColor="red" />
      <Placeholder backgroundColor="orange" />
    </Stack>,
  );
  const columnsEl = queryAllByAttribute("data-id", container, "stack")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("center");
});

test("It can left-align children", () => {
  const {container} = render(
    <Stack alignX="left">
      <Placeholder data-id="childElement" backgroundColor="red" />
    </Stack>,
  );
  const columnsEl = queryAllByAttribute("data-id", container, "stack")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("flex-start");
});

test("It adds data-id", () => {
  const dom = render(
    <Stack data-id="MyCustomStack">
      <Placeholder backgroundColor="red" />
      <Placeholder backgroundColor="orange" />
    </Stack>,
  );

  expect(
    queryAllByAttribute("data-id", dom.container, "MyCustomStack"),
  ).toHaveLength(1);
});
