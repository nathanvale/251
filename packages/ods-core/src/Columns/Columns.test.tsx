import React from "react";
import {
  queryAllByAttribute,
  render,
} from "@origin-digital/ods-testing-library";
import { Column } from "../Column";
import { Placeholder } from "../Placeholder";
import { Columns } from "./Columns";

test("it spaces column comps with small space", () => {
  const { container } = render(
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
    </Columns>
  );
  //Parent container sets initial margin to negative of the space value.
  const style = window.getComputedStyle(container.firstChild as Element);
  expect(style.marginLeft).toEqual("-12px");

  // Each Column then sets a left padding of space (small = 12px).
  queryAllByAttribute("data-id", container, "column").forEach((colEl) => {
    const elStyle = window.getComputedStyle(colEl.firstChild as Element);
    expect(elStyle.paddingLeft).toEqual("12px");
  });
});

test("it top-aligns children by default", () => {
  const { container } = render(
    <Columns data-id="my-cols">
      <Column>
        <Placeholder height="100px" />
      </Column>
      <Column>
        <Placeholder height="40px" />
      </Column>
      <Column>
        <Placeholder height="70px" />
      </Column>
    </Columns>
  );

  expect(container).toMatchSnapshot();
});

test("it vertically aligns children middle if alignY is center", () => {
  const { container } = render(
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
    </Columns>
  );

  expect(container).toMatchSnapshot();
});

test("it vertically aligns children bottom if alignY is bottom", () => {
  const { container } = render(
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
    </Columns>
  );

  expect(container).toMatchSnapshot();
});
