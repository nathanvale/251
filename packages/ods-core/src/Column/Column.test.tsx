import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Columns } from "../Columns";
import { Placeholder } from "../Placeholder";
import { Column } from "./Column";

test("it sets width to flex by default", () => {
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
  expect(container.firstChild).toMatchSnapshot();
});

test('it correctly allocates required width for "content"', () => {
  const { container } = render(
    <Columns space="small">
      <Column width="content">
        <Placeholder label="This is content width" />
      </Column>
      <Column>
        <Placeholder />
      </Column>
      <Column>
        <Placeholder />
      </Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it correctly sets width for proportions 1/3 and 2/3", () => {
  const { container } = render(
    <Columns space="small">
      <Column width="1/3">
        <Placeholder label="This is 1/3" />
      </Column>
      <Column width="2/3">
        <Placeholder label="This is 2/3" />
      </Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it correctly sets width for proportions 1/12, 7/12, 1/3", () => {
  const { container } = render(
    <Columns space="small">
      <Column width="1/12">
        <Placeholder label="This is 1/12" />
      </Column>
      <Column width="5/12">
        <Placeholder label="This is 5/12" />
      </Column>
      <Column width="1/3">
        <Placeholder label="This is 1/3" />
      </Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});
