import React from "react";
import { Text } from "@origin-digital/ods-core";
import { Page, PageSection } from "../../Page/Page";
import { DocsPage } from "../../../types";
import Code from "../../Code/Code";
import {
  setupTracking,
  setupReportingClient,
} from "../../../../../packages/ods-core/src/TrackingProvider/TrackingProvider.docs";
import {
  example,
  docs,
} from "../../../../../packages/ods-core/src/TrackedLink/TrackedLink.docs";
import { disableTrackingExample } from "../../../../../packages/ods-core/src/TrackingDisable/TrackingDisable.docs";

const TrackingGuide = () => {
  const sections: PageSection[] = [
    {
      title: setupTracking.label,
      description: setupTracking.description,
      children: <Code>{setupTracking.Code ? setupTracking.Code() : ""}</Code>,
    },
    {
      title: disableTrackingExample.label,
      description: disableTrackingExample.description,
      children: (
        <Code>
          {disableTrackingExample.Code ? disableTrackingExample.Code() : ""}
        </Code>
      ),
    },
    {
      title: example.label,
      description: docs.description,
      children: <Code>{example.codeString || ""}</Code>,
    },
    {
      title: setupReportingClient.label,
      description: setupReportingClient.description,
      children: <Code>{setupReportingClient.codeString || ""}</Code>,
    },
  ];
  return (
    <Page
      title="Tracking guide"
      description={
        <Text>
          Some interaction components support the capture of tracking events for
          the purpose of analytics.
        </Text>
      }
      sections={sections}
    />
  );
};

const page: DocsPage = {
  title: "Tracking guide",
  component: TrackingGuide,
};

export default page;
