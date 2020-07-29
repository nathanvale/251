/* eslint-disable no-alert */
import React from "react";
import { ComponentDocs, ExampleDocs } from "@origin-digital/ods-types";
import { Button } from "../Button/Button";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { TextLink } from "../TextLink/TextLink";
import { Card } from "../Card/Card";
import { TrackingDisable } from "./TrackingDisable";

export const disableTrackingExample: ExampleDocs = {
  label: "Disabling a trackable component",
  description: (
    <Text>
      Interaction components are trackable by defualt when wrapped in a{" "}
      <TextLink href="#/components/TrackingProvider">TrackingProvider</TextLink>
      . You can directly override this behaviour by wrapping{" "}
      <TextLink href="#/components/TrackingDisable">TrackingDisable</TextLink>{" "}
      around components you do not want to be tracked.
    </Text>
  ),
  Code: () => (
    <TrackingProvider
      onTrackingCapture={() => {
        alert("Tracking captured");
      }}
    >
      <Card>
        <Stack space="large">
          <Button>I am being tracked</Button>
          <TrackingDisable>
            <Button>I am not being tracked</Button>
          </TrackingDisable>
        </Stack>
      </Card>
    </TrackingProvider>
  ),
};

export const docs: ComponentDocs = {
  category: "Logic",
  componentName: "TrackingDisable",
  description: "Prevent interaction components from sending tracking events.",
  migrationGuide: false,
  examples: {
    default: {},
    additional: [disableTrackingExample],
  },
  snippets: [],
};
