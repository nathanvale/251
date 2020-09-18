import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Box } from "../Box";
import { Preloader, PreloaderProps } from "./Preloader";

export const docs: ComponentDocs<PreloaderProps> = {
  category: "Atomic",
  componentName: "Preloader",
  description: [
    "This component is used to show a the origin pre loading animation while the user is waiting for a page to be loaded. It should not be used for loading sections of a page, instead a Spinner should be used to communication section loading.",
  ].join(" "),
  propDescriptions: {
    tone: [`Available colours to choose for the Preloader.`].join(" "),
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Preloader />,
    },
    additional: [
      {
        label: "Tone white, on dark backgrounds",
        description: `If the background is dark, use the "white" tone for spinner.`,
        playroom: true,
        Code: () => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: "rgb(236, 0, 0)", height: "100px" }}
          >
            <Preloader tone="white" />
          </Box>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Basic loading",
      Code: () => <Preloader />,
    },
    {
      label: "with tone",
      Code: () => <Preloader tone="white" />,
    },
  ],
};
