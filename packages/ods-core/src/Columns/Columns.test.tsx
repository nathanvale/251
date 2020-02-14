import React from "react";
import {queryAllByAttribute, render} from "@origin-digital/ods-testing-library";
import {Column} from "../Column/Column";
import {Placeholder} from "../Placeholder/Placeholder";
import {Columns} from "./Columns";

test("it spaces column comps with small space", () => {
  const {container} = render(
    <Columns space="small">
      <Column>
        <Placeholder />
      </Column>
      <Column>
        <Placeholder />
      </Column>
      <Column>
        <Placeholder />
      </Column>
    </Columns>,
  );
  //Parent container sets initial margin to negative of the space value.
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.marginLeft).toEqual("-12px");

  // Each Column then sets a left padding of space (small = 12px).
  queryAllByAttribute("data-id", container, "column").forEach(colEl => {
    const elStyle = window.getComputedStyle(colEl.firstChild as Element);
    expect(elStyle.paddingLeft).toEqual("12px");
  });
});

test("it top-aligns children by default", () => {
  const {container} = render(
    <Columns>
      <Column>
        <Placeholder height="100px" />
      </Column>
      <Column>
        <Placeholder height="40px" />
      </Column>
      <Column>
        <Placeholder height="70px" />
      </Column>
    </Columns>,
  );

  const columnsEl = queryAllByAttribute("data-id", container, "columns")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("flex-start");
});

test("it vertically aligns children middle if alignY is center", () => {
  const {container} = render(
    <Columns alignY="center">
      <Column>
        <Placeholder height="100px" />
      </Column>
      <Column>
        <Placeholder height="40px" />
      </Column>
      <Column>
        <Placeholder height="70px" />
      </Column>
    </Columns>,
  );

  const columnsEl = queryAllByAttribute("data-id", container, "columns")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("center");
});

test("it vertically aligns children bottom if alignY is bottom", () => {
  const {container} = render(
    <Columns alignY="bottom">
      <Column>
        <Placeholder height="100px" />
      </Column>
      <Column>
        <Placeholder height="40px" />
      </Column>
      <Column>
        <Placeholder height="70px" />
      </Column>
    </Columns>,
  );

  const columnsEl = queryAllByAttribute("data-id", container, "columns")[0];
  const style = window.getComputedStyle(columnsEl as Element);
  expect(style.alignItems).toEqual("flex-end");
});

//TODO: FInd a way to unit test collapseBelow. Needs to set window width.
