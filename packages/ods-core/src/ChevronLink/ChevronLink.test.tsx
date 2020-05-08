import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { ChevronLink, TrackingProvider } from "..";

test("It can render", () => {
  const { container } = render(<ChevronLink href="">Chevron link</ChevronLink>);
  expect(container.firstChild).toMatchSnapshot();
});

test("It can render another tone", () => {
  const { container } = render(
    <ChevronLink variant="secondary" href="">
      Chevron link
    </ChevronLink>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it("should call tracking handler when passed into the TrackingProvider", () => {
  const label = "label";

  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const { getByText } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <ChevronLink href="">{label}</ChevronLink>
    </TrackingProvider>
  );
  const node = getByText(label);
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith({
    "data-id": "chevron-link",
    type: "ChevronLink",
    label,
    postClickState: undefined,
  });
});
