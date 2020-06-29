import React from "react";
import {
  queryByAttribute,
  render,
  fireEvent,
} from "@origin-digital/ods-testing-library";
import { Dialog } from "./Dialog";

test("it renders a Dialog", () => {
  const onClose = jest.fn();
  const { container, getAllByText, getByTestId } = render(
    <Dialog
      id="test-modal"
      open={true}
      data-id="test-modal"
      title="Title"
      onClose={onClose}
    >
      Content
    </Dialog>
  );

  const chkRoot = getByTestId("test-modal");
  expect(chkRoot).toBeDefined();

  const ariaLabel = queryByAttribute(
    "aria-labelledby",
    container,
    "test-modal-title"
  );
  expect(ariaLabel).toBeDefined();

  const ariaDescribe = queryByAttribute(
    "aria-describedby",
    container,
    "test-modal-content"
  );
  expect(ariaDescribe).toBeDefined();

  const items = getAllByText("Title");
  expect(items).toHaveLength(1);

  const content = getAllByText("Content");
  expect(content).toHaveLength(1);

  const button = getByTestId("close");
  fireEvent.click(button);
  expect(onClose).toHaveBeenCalled();
});

test("it renders a closed Dialog", () => {
  const { queryByTestId } = render(
    <Dialog id="test-modal" title="Title" data-id="test-modal">
      Content
    </Dialog>
  );

  const chkRoot = queryByTestId("test-modal");
  expect(chkRoot).toBeNull();
});

test("it renders a Dialog without close button", () => {
  const onClose = jest.fn();
  const { queryByTestId } = render(
    <Dialog
      id="test-modal"
      open={true}
      data-id="test"
      title="Title"
      onClose={onClose}
      hideClose
    >
      Content
    </Dialog>
  );

  const checkClose = queryByTestId("close");
  expect(checkClose).toBeNull();
});
