import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { List } from "./List";

test("it renders a List", () => {
  const { container } = render(
    <List>
      <List>This is a secondary ListItem.</List>
      <List>This is a secondary ListItem.</List>
      <List>This is a secondary ListItem.</List>
    </List>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders a List with custom data-id", () => {
  const { container } = render(
    <List data-id="myId">
      <List>This is a secondary ListItem.</List>
      <List>This is a secondary ListItem.</List>
      <List>This is a secondary ListItem.</List>
    </List>
  );

  expect(container.firstChild).toHaveAttribute("data-id", "myId");
});
