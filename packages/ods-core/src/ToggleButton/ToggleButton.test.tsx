import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { IconElectricity } from "@origin-digital/ods-icons";
import { ToggleButtonProps } from "./ToggleButton";
import { generateToggleButton } from "./ToggleButton.helper";

const renderToggleButton = (
  toggleButtonProps: Partial<ToggleButtonProps> = {}
) => render(generateToggleButton(toggleButtonProps));

test("It renders", () => {
  const { container } = renderToggleButton();
  expect(container).toMatchSnapshot();
});

test("It renders in selected state", () => {
  const { container } = renderToggleButton({ selected: true });
  expect(container).toMatchSnapshot();
});

test("It can render icon", () => {
  const { container } = renderToggleButton({ children: <IconElectricity /> });
  expect(container).toMatchSnapshot();
});
