import React from "react";

/* eslint-disable react/display-name */
import { ComponentDocs } from "@origin-digital/ods-types";
import { IconHelp } from "@origin-digital/ods-icons";
import { Button } from "../Button/Button";
import { generateAlert, alertTones } from "./Alert.helper";
import { AlertProps } from "./Alert";

export const propDescriptions = {
  children: "Content to be shown in the alert",
  title: "Title to be shown in the alert",
  tone:
    "Tones represent colours. The usage of colour in our design system is designed to have a strong correlation with the tone of voice being used.",
  variant: "Variant represents the fill of the alert",
  icon: "Icon to be shown as a replacement of the default icon",
  onCloseClick:
    "When provided will show the close button and calls this function when clicked",
};

export const docs: ComponentDocs<AlertProps> = {
  category: "Content",
  componentName: "Alert",
  description:
    "Alert is used to display messages to the customer. Open the examples in Playroom to see the behaviour of this component. ",
  propDescriptions,
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateAlert(),
    },
    additional: [
      {
        label: `Title`,
        Code: () => generateAlert({ title: "Aliquam sit amet" }),
      },
      {
        label: `Alternative icon`,
        Code: () => generateAlert({ icon: <IconHelp /> }),
      },
      {
        label: `No icon`,
        Code: () => generateAlert({ icon: false }),
      },
      {
        label: "Close",
        Code: () => {
          const [closed, setClosed] = React.useState(false);

          if (closed) {
            return <Button onClick={() => setClosed(false)}>Show again</Button>;
          }

          return generateAlert({
            onCloseClick: () => setClosed(true),
          });
        },
        codeString: `
  import React from 'react';
  import { Alert } from "@origin-digital/ods-core";
  
  export default () => {
    const [closed, setClosed] = React.useState(false);
    
    if (closed) {
      return <div />;
    }

    return (
      <Alert onCloseClick={() => setClosed(true)}>
        <Text>
          Lorum ipsum...
        </Text>
      </Alert>
    );
  }
  `,
      },
      ...alertTones.map((tone) => ({
        label: `Tone (${tone})`,
        Code: () => generateAlert({ tone }),
      })),
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => generateAlert(),
    },
    {
      label: "Tone (critical)",
      Code: () => generateAlert({ tone: "critical" }),
    },
    {
      label: "Tone (promote) and close",
      Code: () => generateAlert({ tone: "promote", onCloseClick: () => {} }),
    },
  ],
};
