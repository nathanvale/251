/* eslint-disable no-alert */
/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs, ExampleDocs } from "@origin-digital/ods-types";
import {
  TrackingProvider,
  TrackingProviderProps,
  Button,
  Card,
  Text,
  TextLink,
  Stack,
} from "..";

export const setupTracking: ExampleDocs = {
  label: "Setting up tracking in your app",
  description: (
    <Text>
      To provide tracking, all you have to do is wrap{" "}
      <TextLink href="/components/TrackingProvider">TrackingProvider</TextLink>{" "}
      around the root of your app and pass in a handler that expects a tracking
      event object that contains a data-id, type of interaction component (e.g.
      Button), a label (e.g. Button label) and an optional postClickState (e.g.
      An accordion that has opened or closed).
    </Text>
  ),
  noCard: true,
  Code: () => (
    <TrackingProvider
      onTrackingCapture={(props) => {
        alert(
          `data-id: ${props["data-id"]}, type: ${props.type}, label: ${props.label}, postClickState: ${props.postClickState}`
        );
      }}
    >
      <Card>
        <Button>I am being tracked!</Button>
      </Card>
    </TrackingProvider>
  ),
};

export const setupReportingClient: ExampleDocs = {
  label: "Simple example using @origin-digital/reporting-client",
  playroom: false,
  description: (
    <Stack space={["medium", "large"]}>
      <Text>
        If you only need interaction-click events you can use a function
        `trackingProviderCaptureClick` exposed by the reporting-client package.
      </Text>
      <Text>
        Note: If the component has tracking enabled, the data-id will be used as
        part of the identifier. Interaction events have an id and can have an
        optional parentContainer supplied. The parentContainer will be sliced
        out of the data-id in the following format{" "}
        <strong>parentContainer:id</strong>. If anything other than one colon is
        present in the data-id the entire string will be considered the id.
      </Text>
    </Stack>
  ),
  codeString: `import {
    trackingProviderCaptureClick
} from "@origin-digital/reporting-client";

const App = ()=><TrackingProvider
  onTrackingCapture={trackingProviderCaptureClick}
>
  <Button data-id="trackingDemo:exampleButton">
    I am being tracked by the @origin-digital/reporting-client!
  </Button>
</TrackingProvider>`,
};

export const setupManualReportingClient: ExampleDocs = {
  label: "Custom example using @origin-digital/reporting-client",
  playroom: false,
  codeString: `import {
  interaction,
  IInteractionData
} from "@origin-digital/reporting-client";

const App = ()=><TrackingProvider
  onTrackingCapture={({ "data-id": dataId , label, type, postClickState }) => {
    const interactionData: IInteractionData = {
      dataId,
      componentType: type,
      label,
      state: postClickState
    };
    return interaction("click", interactionData);
  }}
>
  <Button>
    I am being tracked by the @origin-digital/reporting-client!
  </Button>
</TrackingProvider>`,
};

export const docs: ComponentDocs<TrackingProviderProps> = {
  category: "Logic",
  componentName: "TrackingProvider",
  description:
    "The TrackingProvider allows use to pass in a tracking handler that captures tracking events from ODS interaction components.",
  propDescriptions: {
    onTrackingCapture:
      "A tracking handler that that expects a TrackingEvent type.",
  },
  migrationGuide: false,
  examples: {
    default: {},
    additional: [
      setupTracking,
      setupReportingClient,
      setupManualReportingClient,
    ],
  },
  snippets: [],
};
