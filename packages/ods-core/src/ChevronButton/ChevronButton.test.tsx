import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { ChevronButton } from "../ChevronButton";
import { TrackingProvider } from "../TrackingProvider";

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

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = "label";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByText } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <ChevronButton>{label}</ChevronButton>
    </TrackingProvider>
  );
  const node = getByText(label);
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "chevron-button",
    type: "ChevronButton",
    label,
    postClickState: undefined,
  });
});
