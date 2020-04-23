import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { ChevronLink } from "..";

test("It can render", () => {
  const { container } = render(<ChevronLink href="">Chevron link</ChevronLink>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render another tone", () => {
  const { container } = render(
    <ChevronLink variant="secondary" href="">
      Chevron link
    </ChevronLink>
  );
  expect(container.firstChild).toMatchSnapshot();
});
