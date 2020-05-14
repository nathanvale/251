import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { HeadingChevronLink, TrackingProvider } from "..";

test("It can render", () => {
  const { container } = render(
    <HeadingChevronLink href="">Chevron link</HeadingChevronLink>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = "label";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByTestId } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <HeadingChevronLink href="">{label}</HeadingChevronLink>
    </TrackingProvider>
  );
  const node = getByTestId("heading-chevron-link");
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "heading-chevron-link",
    type: "HeadingChevronLink",
    label,
    postClickState: undefined,
  });
});
