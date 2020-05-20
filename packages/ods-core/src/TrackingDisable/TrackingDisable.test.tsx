import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { TrackingEventHandler } from "@origin-digital/ods-types";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";
import { Button } from "../Button/Button";
import { TrackingDisable } from "./TrackingDisable";

describe("DisableTracking", () => {
  it("should stop TrackingProvider from firing tracking events", () => {
    const onTrackingCapture: TrackingEventHandler = jest.fn();

    const { getByText } = render(
      <TrackingProvider onTrackingCapture={onTrackingCapture}>
        <Button data-id="tracked-button">Tracked button</Button>
        <TrackingDisable>
          <Button data-id="un-tracked-button">Untracked button</Button>
        </TrackingDisable>
        ;
      </TrackingProvider>
    );
    const untrackedButton = getByText("Untracked button");
    fireEvent.click(untrackedButton);
    expect(onTrackingCapture).not.toHaveBeenCalled();

    const trackedButton = getByText("Tracked button");
    fireEvent.click(trackedButton);
    expect(onTrackingCapture).toHaveBeenCalled();
  });
});
