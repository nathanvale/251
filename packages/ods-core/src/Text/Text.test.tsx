import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Text } from "./Text";
import { Box } from "..";

test("It should render a p tag by default", () => {
  const { container } = render(<Text>Body Text</Text>);
  const textEl = container.firstElementChild;
  expect(textEl?.tagName.toLowerCase()).toBe("span");
  expect(textEl).toMatchSnapshot();
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

test("It can render body text critical tone", () => {
  const { container } = render(
    <Text weight="medium" tone="critical">
      Body Text
    </Text>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render body text positive tone", () => {
  const { container } = render(
    <Text weight="medium" tone="positive">
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
