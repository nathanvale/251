import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { TextLink, Text } from "..";

test("It can render", () => {
  const { container } = render(
    <Text>
      <TextLink href="someUrl">Text link</TextLink>
    </Text>
  );
  expect(container.firstChild).toMatchSnapshot();
});
