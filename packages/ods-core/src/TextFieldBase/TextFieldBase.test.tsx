import React from "react";
import {
  fireEvent,
  queryByAttribute,
  queryAllByAttribute,
  render,
} from "@origin-digital/ods-testing-library";
import { TextFieldVariant } from "@origin-digital/ods-types";
import { TextFieldBase } from "./TextFieldBase";

(["filled", "outlined"] as TextFieldVariant[]).forEach(
  (variant: TextFieldVariant) => {
    describe(`TextFieldBase variant ${variant}`, () => {
      test(`should render a ${variant} textFieldBase`, () => {
        const { container } = render(
          <TextFieldBase
            variant={variant}
            id="text-field"
            label="The title"
            helperText="This is the info"
          />
        );

        expect(container).toMatchSnapshot();
      });

      test(`should render a ${variant} textFieldBase with compact size`, () => {
        const { container } = render(
          <TextFieldBase
            variant={variant}
            id="text-field"
            label="The title"
            helperText="This is the info"
            size="small"
          />
        );

        expect(container).toMatchSnapshot();
      });

      test(`should render a ${variant} textFieldBase in error state`, () => {
        const { container } = render(
          <TextFieldBase
            variant={variant}
            id="my-text-field"
            label="The title"
            helperText="This is the info"
            error
          />
        );

        const label = queryByAttribute(
          "data-id",
          container,
          "my-text-field-label"
        );
        const helperText = queryByAttribute(
          "data-id",
          container,
          "my-text-field-helper-text"
        );

        expect(label).toHaveClass("Mui-error");
        expect(helperText).toHaveClass("Mui-error");
      });

      test(`it should render a disabled ${variant} textFieldBase`, () => {
        const { container } = render(
          <TextFieldBase
            variant={variant}
            id="my-text-field"
            label="The title"
            helperText="This is the info"
            disabled
          />
        );

        const label = queryByAttribute(
          "data-id",
          container,
          "my-text-field-label"
        );
        const helperText = queryByAttribute(
          "data-id",
          container,
          "my-text-field-helper-text"
        );
        const input = queryByAttribute("id", container, "my-text-field");

        expect(label).toHaveClass("Mui-disabled");
        expect(helperText).toHaveClass("Mui-disabled");
        expect(input).toHaveAttribute("disabled");
      });
    });
  }
);
test("it renders a filled textFieldBase by default", () => {
  const { container } = render(
    <TextFieldBase
      id="text-field"
      label="The title"
      helperText="This is the info"
    />
  );

  expect(container).toMatchSnapshot();
});

test("it hides helperText space when `reserverHelperTextSapce` flag is set", () => {
  const { container } = render(
    <TextFieldBase id="text-field" label="The title" hideHelperTextSpace />
  );

  expect(container).toMatchSnapshot();
});

test("it passes down id and data-id", () => {
  const { getByTestId } = render(
    <TextFieldBase data-id="text-field-base" id="my-text-field" />
  );

  const textFieldBaseRoot = getByTestId("text-field-base") as HTMLDivElement;
  const input = getByTestId("text-field-base-input") as HTMLInputElement;

  expect(textFieldBaseRoot).toBeDefined();
  expect(input?.tagName.toLowerCase()).toEqual("input");
});

test("when a text is entered onChanged is called with the value of input", () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <TextFieldBase id="my-text-field" onChange={onChange} />
  );

  const input = getByTestId("my-text-field-input") as HTMLInputElement;

  expect(input.value).toEqual("");

  fireEvent.change(input, { target: { value: "John" } });

  expect(onChange).toHaveBeenCalled();
  expect(input?.value).toEqual("John");
});

test("Sets data-id to id if not provided", () => {
  const onChange = jest.fn();
  const { container } = render(
    <TextFieldBase
      id="my-text-field"
      label="some label"
      helperText="Some helper text"
      onChange={onChange}
    />
  );

  expect(
    queryAllByAttribute("data-id", container, "my-text-field")
  ).toHaveLength(1);

  expect(
    queryAllByAttribute("data-id", container, "my-text-field-label")
  ).toHaveLength(1);

  expect(
    queryAllByAttribute("data-id", container, "my-text-field-input")
  ).toHaveLength(1);

  expect(
    queryAllByAttribute("data-id", container, "my-text-field-helper-text")
  ).toHaveLength(1);
});

test("Sets the helper text component to a p is a string is passed", () => {
  const { container } = render(
    <TextFieldBase
      id="my-text-field"
      label="some label"
      helperText="Helper text which is a string"
    />
  );

  const helperText = container.querySelector(".MuiFormHelperText-root");
  expect(helperText!.tagName).toBe("P");
});

test("Sets the helper text component to a div is a string is not passed", () => {
  const { container } = render(
    <TextFieldBase
      id="my-text-field"
      label="some label"
      helperText={<div>Helper text which is not a string</div>}
    />
  );

  const helperText = container.querySelector(".MuiFormHelperText-root");
  expect(helperText!.tagName).toBe("DIV");
});
