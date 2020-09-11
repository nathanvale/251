import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { ToggleButtonGroupProps } from "./ToggleButtonGroup";
import {
  generateToggleButtonGroup,
  toggleButtons,
  toggleButtonsObject,
} from "./ToggleButtonGroup.helper";

const renderToggleButtonGroup = (
  props: Partial<ToggleButtonGroupProps> = {},
  childrenType: "string" | "object" | "ReactNode" = "string",
  disabledIndex: number = -1
) => render(generateToggleButtonGroup(props, childrenType, disabledIndex));

test("It renders with string[] options", () => {
  const { container } = renderToggleButtonGroup({
    defaultValue: toggleButtons[2],
  });
  expect(container).toMatchSnapshot();
});

test("It renders with object[] options", () => {
  const { container } = renderToggleButtonGroup(
    {
      defaultValue: toggleButtonsObject[2].value,
    },
    "object"
  );
  expect(container).toMatchSnapshot();
});

test("It renders with direct ToggleButton children", () => {
  const { container } = renderToggleButtonGroup(
    {
      defaultValue: toggleButtonsObject[1].value,
    },
    "ReactNode"
  );
  expect(container).toMatchSnapshot();
});

test("It renders with content width", () => {
  const { container } = renderToggleButtonGroup({
    defaultValue: toggleButtons[1],
    width: "content",
  });
  expect(container).toMatchSnapshot();
});

test("It renders disabled buttons", () => {
  const { container } = renderToggleButtonGroup(
    {
      defaultValue: toggleButtonsObject[1].value,
    },
    "ReactNode",
    2
  );
  expect(container).toMatchSnapshot();
});

test("It renders small buttons", () => {
  const { container } = renderToggleButtonGroup({
    defaultValue: toggleButtons[1],
    size: "small",
  });
  expect(container).toMatchSnapshot();
});

test("It sets the data-id", () => {
  const { getAllByTestId } = renderToggleButtonGroup({
    "data-id": "tbg-id",
    defaultValue: toggleButtons[1],
  });
  expect(getAllByTestId("tbg-id")).toHaveLength(1);
});

test("It sets aria-label to id", () => {
  const { getByTestId } = renderToggleButtonGroup({
    defaultValue: toggleButtons[1],
    id: "tbg-id",
  });
  expect(getByTestId("tbg-id")).toHaveAttribute("id", "tbg-id");
  expect(getByTestId("tbg-id")).toHaveAttribute("aria-label", "tbg-id");
});

test("It calls onChange handler", () => {
  const onChange = jest.fn();

  const { getByTestId } = renderToggleButtonGroup({
    defaultValue: toggleButtons[1],
    id: "my-tbg",
    onChange,
  });
  fireEvent.click(getByTestId("Melbourne"));
  expect(onChange).toHaveBeenCalled();
});
