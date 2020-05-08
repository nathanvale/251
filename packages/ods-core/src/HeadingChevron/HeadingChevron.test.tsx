import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { HeadingChevron, TrackingProvider } from "..";

test("It can render", () => {
  const { container } = render(
    <HeadingChevron href="">Chevron link</HeadingChevron>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = "label";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByTestId } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <HeadingChevron href="">{label}</HeadingChevron>
    </TrackingProvider>
  );
  const node = getByTestId("heading-chevron");
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "heading-chevron",
    type: "HeadingChevron",
    label,
    postClickState: undefined,
  });
});
