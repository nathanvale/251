/* eslint-disable no-alert */
/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs, ExampleDocs } from "@origin-digital/ods-types";
import { TrackingDisable, Button, TrackingProvider, Stack } from "..";

export const disableTracking: ExampleDocs = {
  label: "Running example inside TrackingProvider",
  Code: () => (
    <TrackingProvider
      onTrackingCapture={() => {
        alert("Tracking captured");
      }}
    >
      <Stack>
        <Button>I am being tracked</Button>
        <TrackingDisable>
          <Button>I am not being tracked</Button>
        </TrackingDisable>
      </Stack>
    </TrackingProvider>
  ),
};

export const docs: ComponentDocs = {
  category: "Logic",
  componentName: "TrackingDisable",
  description:
    "The TrackingDisable component can be used where whole apps or screens are wrapped with a TrackingProvider to stop children from sending tracking events.",
  migrationGuide: false,
  examples: {
    default: {},
    additional: [disableTracking],
  },
  snippets: [],
};
