import React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Text } from "../Text/Text";
import { Dialog } from "./Dialog";

export const tests: E2ETests = [
  {
    label: "Default dialog",
    Code: () => (
      <Dialog id="dialog" data-id="dialog" open={true} title="Modal title">
        <Text>Modal body</Text>
      </Dialog>
    ),
  },
  {
    label: "Opaque background",
    Code: () => (
      <Dialog
        data-id="dialog"
        id="dialog-opaque-bg"
        open={true}
        opaqueBackground
        title="Modal title"
      >
        <Text>Modal body</Text>
      </Dialog>
    ),
  },
  {
    label: "Larger width",
    Code: () => (
      <Dialog
        data-id="dialog"
        id="dialog-max-widths"
        open={true}
        maxWidth="lg"
        title="Modal title"
      >
        <Text>Modal body</Text>
      </Dialog>
    ),
  },
];
