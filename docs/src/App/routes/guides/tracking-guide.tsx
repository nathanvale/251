import React from "react";
import { Text } from "@origin-digital/ods-core";
import { Page, PageSection } from "../../Page/Page";
import { DocsPage } from "../../../types";
import Code from "../../Code/Code";
import {
  setupTracking,
  setupReportingClient,
  setupManualReportingClient,
  useTrackingExample,
} from "../../../../../packages/ods-core/src/TrackingProvider/TrackingProvider.docs";
import {
  example,
  docs,
} from "../../../../../packages/ods-core/src/TrackedLink/TrackedLink.docs";
import { disableTrackingExample } from "../../../../../packages/ods-core/src/TrackingDisable/TrackingDisable.docs";
import { missingSnippet } from "../../ComponentDoc/ComponentDoc";

let snippets: any = {};
try {
  snippets = require("../../../snippets-components.json");
} catch (error) {}

const TrackingGuide = () => {
  const sections: PageSection[] = [
    {
      title: setupTracking.label,
      description: setupTracking.description,
      children: (
        <Code
          codeString={
            snippets?.TrackingProvider?.additional[0] || missingSnippet
          }
        >
          {setupTracking.Code ? setupTracking.Code() : ""}
        </Code>
      ),
    },
    {
      title: disableTrackingExample.label,
      description: disableTrackingExample.description,
      children: (
        <Code
          codeString={
            snippets?.TrackingDisable?.additional[0] || missingSnippet
          }
        >
          {disableTrackingExample.Code ? disableTrackingExample.Code() : ""}
        </Code>
      ),
    },
    {
      title: example.label,
      description: docs.description,
      children: (
        <Code
          codeString={snippets?.TrackedLink?.additional[0] || missingSnippet}
        >
          {example.codeString || ""}
        </Code>
      ),
    },
    {
      title: setupReportingClient.label,
      description: setupReportingClient.description,
      children: (
        <Code
          codeString={
            snippets?.TrackingProvider?.additional[1] || missingSnippet
          }
        >
          {setupReportingClient.codeString || ""}
        </Code>
      ),
    },
    {
      title: setupManualReportingClient.label,
      description: setupManualReportingClient.description,
      children: (
        <Code
          codeString={
            snippets?.TrackingProvider?.additional[2] || missingSnippet
          }
        >
          {setupManualReportingClient.codeString || ""}
        </Code>
      ),
    },
    {
      title: "Tracking components",
      description: [
        "The list of components that raise a tracking event when the TrackingProvider is available are as follows:",
      ].join(" "),
      children: (
        <Text>
          <ul>
            <li>Button</li>
            <li>ChevronButton</li>
            <li>ChevronLink</li>
            <li>HeadingChevronLink</li>
            <li>TextLink</li>
            <li>TrackedLink</li>
          </ul>
        </Text>
      ),
    },
    {
      title: useTrackingExample.label,
      description: useTrackingExample.description,
      children: (
        <Code
          codeString={
            snippets?.TrackingProvider?.additional[3] || missingSnippet
          }
        >
          {useTrackingExample.codeString || ""}
        </Code>
      ),
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
