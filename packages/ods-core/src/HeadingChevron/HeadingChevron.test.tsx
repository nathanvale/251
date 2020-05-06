import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { HeadingChevron } from "..";

test("It can render", () => {
  const { container } = render(
    <HeadingChevron href="">Chevron link</HeadingChevron>
  );
  expect(container.firstChild).toMatchSnapshot();
});
