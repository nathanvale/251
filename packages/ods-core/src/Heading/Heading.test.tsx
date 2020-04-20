import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Box } from "@material-ui/core";
import { Heading } from "./Heading";

test("It can render h1", () => {
  const { container } = render(<Heading variant="h1">Heading H1</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render h2", () => {
  const { container } = render(<Heading variant="h1">Heading H1</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render h3", () => {
  const { container } = render(<Heading variant="h1">Heading H1</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render h4", () => {
  const { container } = render(<Heading variant="h1">Heading H1</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render h1 medium weight", () => {
  const { container } = render(
    <Heading variant="h1" weight="medium">
      Heading H1
    </Heading>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render h2 medium weight", () => {
  const { container } = render(
    <Heading variant="h2" weight="medium">
      Heading H1
    </Heading>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render heaading truncated", () => {
  const { container } = render(
    <Box style={{ width: 90 }}>
      <Heading variant="h2" truncate>
        Truncated text
      </Heading>
    </Box>
  );
  expect(container.firstChild).toMatchSnapshot();
});
