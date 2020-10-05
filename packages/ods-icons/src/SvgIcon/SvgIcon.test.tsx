import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { SvgIcon } from "./SvgIcon";

test("it renders a svg", () => {
  const { container } = render(
    <SvgIcon>
      <path d="M35.399 3c-5.045 0-9.387 4.104-11.398 8.391-2.013-4.286-6.355-8.391-11.401-8.391-6.955 0-12.6 5.646-12.6 12.601 0 14.149 14.273 17.859 24.001 31.848 9.195-13.902 23.999-18.15 23.999-31.848 0-6.956-5.645-12.601-12.601-12.601z" />
    </SvgIcon>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders a large svg", () => {
  const { container } = render(
    <SvgIcon size="large">
      <path d="M35.399 3c-5.045 0-9.387 4.104-11.398 8.391-2.013-4.286-6.355-8.391-11.401-8.391-6.955 0-12.6 5.646-12.6 12.601 0 14.149 14.273 17.859 24.001 31.848 9.195-13.902 23.999-18.15 23.999-31.848 0-6.956-5.645-12.601-12.601-12.601z" />
    </SvgIcon>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders a svg with color", () => {
  const { container } = render(
    <SvgIcon color="critical">
      <path d="M35.399 3c-5.045 0-9.387 4.104-11.398 8.391-2.013-4.286-6.355-8.391-11.401-8.391-6.955 0-12.6 5.646-12.6 12.601 0 14.149 14.273 17.859 24.001 31.848 9.195-13.902 23.999-18.15 23.999-31.848 0-6.956-5.645-12.601-12.601-12.601z" />
    </SvgIcon>
  );
  expect(container.firstChild).toMatchSnapshot();
});
