import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { IconHelp } from "@origin-digital/ods-icons";
import { generateAlert, alertTones } from "./Alert.helper";

export const tests: E2ETests = [
  {
    label: "Default alert",
    Code: () => generateAlert(),
  },
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
      return generateAlert({
        onCloseClick: () => {},
      });
    },
  },
  ...alertTones.map((tone) => ({
    label: `Tone (${tone})`,
    Code: () => generateAlert({ tone }),
  })),
  ...alertTones.map((tone) => ({
    label: `Tone (${tone}) (filled)`,
    Code: () => generateAlert({ tone, variant: "filled" }),
  })),
];
