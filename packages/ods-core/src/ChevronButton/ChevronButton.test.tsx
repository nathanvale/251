import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { ChevronButton } from "..";

test("It can render", () => {
  const { container } = render(<ChevronButton>Chevron link</ChevronButton>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render another tone", () => {
  const { container } = render(
    <ChevronButton variant="secondary">Chevron button</ChevronButton>
  );
  expect(container.firstChild).toMatchSnapshot();
});
