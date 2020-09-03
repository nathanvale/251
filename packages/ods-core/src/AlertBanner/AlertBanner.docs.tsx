/* eslint-disable react/display-name */
import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { propDescriptions } from "../Alert/Alert.docs";
import { AlertBannerProps, AlertBanner } from "./AlertBanner";
import { generateAlertBanner } from "./AlertBanner.helper";

export const docs: ComponentDocs<AlertBannerProps> = {
  category: "Content",
  componentName: "AlertBanner",
  description:
    "AlertBanner is used to display the most prominent message on a page. Open the examples in Playroom to see the behaviour of this component. ",
  propDescriptions: {
    ...propDescriptions,
    offset: "Top offset of alert banner",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateAlertBanner({ tone: "critical" }),
    },
    additional: [],
  },
  snippets: [
    {
      label: "Default",
      Code: () => generateAlertBanner({ tone: "critical" }),
    },
    {
      label: "Close button",
      Code: () => (
        <AlertBanner tone="critical" onCloseClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </AlertBanner>
      ),
    },
  ],
};
