import React from "react";
import {render} from "@origin-digital/ods-testing-library";
import {Columns} from "../Columns/Columns";
import {Placeholder} from "../Placeholder/Placeholder";
import {Column} from "./Column";

test("it sets width to flex by default", () => {
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
  expect(container.firstChild).toMatchSnapshot();
});

test('it correctly allocates required width for "content"', () => {
  const {container} = render(
    <Columns space="small">
      <Column width="content">
        <Placeholder>This is content width</Placeholder>
      </Column>
      <Column>
        <Placeholder />
      </Column>
      <Column>
        <Placeholder />
      </Column>
    </Columns>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it correctly sets width for proportions 1/3 and 2/3", () => {
  const {container} = render(
    <Columns space="small">
      <Column width="1/3">
        <Placeholder>This is 1/3</Placeholder>
      </Column>
      <Column width="2/3">
        <Placeholder>This is 2/3</Placeholder>
      </Column>
    </Columns>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it correctly sets width for proportions 1/12, 7/12, 1/3", () => {
  const {container} = render(
    <Columns space="small">
      <Column width="1/12">
        <Placeholder>This is 1/12</Placeholder>
      </Column>
      <Column width="5/12">
        <Placeholder>This is 5/12</Placeholder>
      </Column>
      <Column width="1/3">
        <Placeholder>This is 1/3</Placeholder>
      </Column>
    </Columns>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
