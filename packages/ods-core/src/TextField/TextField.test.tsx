import React from "react";
import {
  fireEvent,
  queryByAttribute,
  render,
} from "@origin-digital/ods-testing-library";
import { IconCheck } from "@origin-digital/ods-icons";
import { EndIconType, TextField } from "./TextField";

(["success", "validating", "error"] as EndIconType[]).forEach(
  (endIcon: EndIconType) => {
    describe(`TextField with ${endIcon} endIcon`, () => {
      test(`should render ${endIcon} after the text`, () => {
        const { container } = render(
          <TextField
            endIcon={endIcon}
            id="text-field"
            label={`TextField with ${endIcon} icon`}
          />
        );

        expect(container).toMatchSnapshot();
      });
    });
  }
);

test(`should render the custom after the text`, () => {
  const { container } = render(
    <TextField endIcon={<IconCheck />} id="text-field" label="Custom endIcon" />
  );

  expect(container).toMatchSnapshot();
});

test(`should render the custom before the text`, () => {
  const { container } = render(
    <TextField
      startIcon={<IconCheck />}
      id="text-field"
      label="Custom startIcon"
    />
  );

  expect(container).toMatchSnapshot();
});
test(`should render a TextField in error state`, () => {
  const { container } = render(
    <TextField
      id="my-text-field"
      label="The title"
      helperText="This is the info"
      error
    />
  );

  const label = queryByAttribute("data-id", container, "my-text-field-label");
  const helperText = queryByAttribute(
    "data-id",
    container,
    "my-text-field-helper-text"
  );

  expect(label).toHaveClass("Mui-error");
  expect(helperText).toHaveClass("Mui-error");
});

test("it passes down id and data-id", () => {
  const { getByTestId } = render(
    <TextField data-id="text-field-base" id="my-text-field" />
  );

  const TextFieldRoot = getByTestId("text-field-base") as HTMLDivElement;
  const input = getByTestId("text-field-base-input") as HTMLInputElement;

  expect(TextFieldRoot).toBeDefined();
  expect(input?.tagName.toLowerCase()).toEqual("input");
});

test("when a text is entered onChanged is called with the value of input", () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <TextField id="my-text-field" onChange={onChange} />
  );

  const input = getByTestId("my-text-field-input") as HTMLInputElement;

  expect(input.value).toEqual("");

  fireEvent.change(input, { target: { value: "John" } });

  expect(onChange).toHaveBeenCalled();
  expect(input?.value).toEqual("John");
});
