import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";

import { TrackingEvent, TrackingEventHandler } from "@origin-digital/ods-types";
import { useTracking } from "../_private/hooks/tracking";
import { TrackingProvider } from "./TrackingProvider";
import { Strong } from "..";

it("should call tracking handler on a trackable component when passed into the Provider", () => {
  const trackingEvent: TrackingEvent = {
    "data-id": "button",
    type: "type",
    label: "This is strong!",
    postClickState: "postClickState",
  };
  const onTrackingCapture: TrackingEventHandler = jest.fn();

  const Button = ({
    children,
    "data-id": dataId,
  }: {
    children: React.ReactNode;
    "data-id"?: string;
  }) => {
    const { onClickCapture, ref } = useTracking({
      children,
      "data-id": trackingEvent["data-id"],
      type: trackingEvent.type,
      postClickState: trackingEvent.postClickState,
    });

    return (
      <button data-id={dataId} ref={ref} onClickCapture={onClickCapture}>
        {children}
      </button>
    );
  };

  const { getByTestId } = render(
    <TrackingProvider onTrackingCapture={onTrackingCapture}>
      <Button data-id={trackingEvent["data-id"]}>
        This is <Strong>strong</Strong>!
      </Button>
      ;
    </TrackingProvider>
  );
  const node = getByTestId(trackingEvent["data-id"]);
  fireEvent.click(node);
  expect(onTrackingCapture).toHaveBeenCalledWith(trackingEvent);
});
