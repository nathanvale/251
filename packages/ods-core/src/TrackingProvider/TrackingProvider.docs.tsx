/* eslint-disable no-alert */
import React from "react";
import { ComponentDocs, ExampleDocs } from "@origin-digital/ods-types";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";
import { TextLink } from "../TextLink/TextLink";
import { Stack } from "../Stack/Stack";
import { Strong } from "../Strong/Strong";
import { TrackingProvider, TrackingProviderProps } from "./TrackingProvider";

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

export const useTrackingExample: ExampleDocs = {
  label: "How to add tracking to any component",
  playroom: false,
  description: (
    <>
      <Text>
        To add custom tracking to any component, you can use the{" "}
        <Strong>useTracking</Strong> hook provided by
        <Strong>@origin-digital/ods-core</Strong>.
      </Text>
      <Text>
        This component receives an object with below props:
        <ul>
          <li>children</li>
          <li>data-id</li>
          <li>type</li>
          <li>postClickState</li>
        </ul>
      </Text>
      <Text>
        It then returns an object with these props:
        <ul>
          <li>
            <Text>
              <Strong>onClickCapture</Strong>: A callback function which
              whenever is called, will trigger the tracking event.
            </Text>
          </li>
          <li>
            <Text>
              <Strong>ref</Strong>: A forward ref to pass to the component which
              will trigger the tracking event.
            </Text>
          </li>
        </ul>
      </Text>
      <Text>
        The only thing to do is to call <code>onClickCapture</code> wherever the
        tracking event should be raised.
      </Text>
      <Text>
        Below you see an example where a <code>Checkbox</code> is raising
        tracking events only when it is checked, but not when it is unchecked.
      </Text>
    </>
  ),
  codeString: `import * as React from 'react';
import {
  OriginThemeProvider,
  Checkbox,
  TrackingProvider,
  useTracking
} from "@origin-digital/ods-core";

const Chk = ({id, label, onChange}: any) => {
  const { onClickCapture, ref } = useTracking({
    children: "I agree to cancel my switch",
    "data-id": "chk-agree",
    type: "Checkbox",
  });

 return <Checkbox
    id={id}
    label={label}
    onChange={(e) => {
      if (e.target.checked) {
        onClickCapture?.();
      }
      onChange?.(e);
    }}
    muiProps={{
      componentProps: {
        ref: ref
      }
    }}
  />
};

const App = () => {
  return (
      <TrackingProvider onTrackingCapture={(props:  any) => {
        alert(
          "data-id: "
            .concat(props["data-id"], ", type: ")
            .concat(props.type, ", label: ")
            .concat(props.label, ", postClickState: ")
            .concat(props.postClickState)
          );
      }}>
        <Chk
            id="chk-agree"
            label="I agree to cancel my switch"
          />
      </TrackingProvider>
  );
}`,
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
      useTrackingExample,
    ],
  },
  snippets: [],
};
