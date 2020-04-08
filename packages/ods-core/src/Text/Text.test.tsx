import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Text } from "./Text";
import { Box } from "..";

test("It can render body text", () => {
  const { container } = render(<Text>Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render body small text", () => {
  const { container } = render(<Text variant="body-small">Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render subtitle text", () => {
  const { container } = render(<Text variant="subtitle">Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render subtitle small text", () => {
  const { container } = render(<Text variant="subtitle-small">Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render subtitle caption text", () => {
  const { container } = render(<Text variant="caption">Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render subtitle overline text", () => {
  const { container } = render(<Text variant="overline-text">Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render body text medium weight", () => {
  const { container } = render(<Text weight="medium">Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render body text medium strong", () => {
  const { container } = render(<Text weight="strong">Body Text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render body text critical tone", () => {
  const { container } = render(
    <Text weight="strong" tone="critcal">
      Body Text
    </Text>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render body text positive tone", () => {
  const { container } = render(
    <Text weight="strong" tone="positive">
      Body Text
    </Text>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render body text truncated", () => {
  const { container } = render(
    <Box style={{ width: 90 }}>
      <Text truncate>Truncated text</Text>
    </Box>
  );
  expect(container.firstChild).toMatchSnapshot();
});
