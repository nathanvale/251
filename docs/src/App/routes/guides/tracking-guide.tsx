import React from "react";
import { Text, TextLink } from "@origin-digital/ods-core";
import { Page, PageSection } from "../../Page/Page";
import { DocsPage } from "../../../types";
import Code from "../../Code/Code";
import {
  setupTracking,
  setupReportingClient,
} from "../../../../../packages/ods-core/src/TrackingProvider/TrackingProvider.docs";

const TrackingGuide = () => {
  const sections: PageSection[] = [
    {
      title: setupTracking.label,
      description: setupTracking.description,
      children: <Code>{setupTracking.Code ? setupTracking.Code() : ""}</Code>,
    },
    {
      title: setupReportingClient.label,
      description: setupReportingClient.description,
      children: (
        <Code>
          {setupReportingClient.codeString
            ? setupReportingClient.codeString
            : ""}
        </Code>
      ),
    },
  ];
  return (
    <Page
      title="Tracking guide"
      description={
        <Text>
          ODS components support the capture of tracking events for the purpose
          of tracking analytics. You can use any tracking library you want by
          using the{" "}
          {
            <TextLink href="#/components/TrackingProvider">
              TrackingProvider
            </TextLink>
          }
          .
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
