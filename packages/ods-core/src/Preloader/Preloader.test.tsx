import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Preloader, PreloaderProps } from "./Preloader";

const renderPreloader = (preloaderProps: Partial<PreloaderProps> = {}) =>
  render(<Preloader {...preloaderProps} />);

test("It renders in default", () => {
  const { container } = renderPreloader();
  expect(container).toMatchSnapshot();
});

test("It renders with the white tone", () => {
  const { container } = renderPreloader({ tone: "white" });
  expect(container).toMatchSnapshot();
});
