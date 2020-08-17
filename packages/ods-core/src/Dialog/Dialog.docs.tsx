import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Dialog, DialogProps } from "./Dialog";

export const docs: ComponentDocs<DialogProps> = {
  category: "Layout",
  componentName: "Dialog",
  description:
    "Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",
  propDescriptions: {
    id: "Required - used for accessibility",
    "data-id": "",
    onClose:
      "Function called when the dialog is closed either by clicking the backdrop or the X.",
    title: "Dialog title",
    children: "Body content of the dialog",
    maxWidth: "Max width of the dialog on desktop",
    open: "When true, the dialog will be displayed",
    hideClose: "Hide the X to close button",
    noFullScreenOnMobile:
      "Disable dialog going to full screen on mobile/tablet (default behaviour)",
    opaqueBackground:
      "Use an opaque background instead of the default transparent",
    muiProps: "Allows access to the MUI component API under the hood",
  },
  migrationGuide: false,
  examples: {
    default: {
      playroom: false,
      Code: () => {
        const [showModal, setShowModal] = React.useState(false);
        return (
          <>
            <Button onClick={() => setShowModal(true)}>Click me</Button>
            <Dialog
              id="dialog"
              open={showModal}
              title="Modal title"
              onClose={() => setShowModal(false)}
            >
              <Text>Modal body</Text>
            </Dialog>
          </>
        );
      },
      codeString: `import React from 'react';
import { Button, Dialog, Text } from "@origin-digital/ods-core";

export default () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <Button onClick={() => setShowModal(true)}>Click me</Button>
        <Dialog
          id="dialog"
          open={showModal}
          title="Modal title"
          onClose={() => setShowModal(false)}
        >
          <Text>Modal body</Text>
        </Dialog>
      </>
    );
  };
`,
    },
    additional: [
      {
        label: "Hide close button",
        description: ["Hide the dialog close button"].join(" "),
        Code: () => {
          const [showModal, setShowModal] = React.useState(false);
          return (
            <>
              <Button onClick={() => setShowModal(true)}>Click me</Button>
              <Dialog
                id="dialog-hideclose"
                open={showModal}
                hideClose
                title="Modal title"
                onClose={() => setShowModal(false)}
              >
                <Text>Modal body</Text>
              </Dialog>
            </>
          );
        },
        codeString: `import React from 'react';
import { Button, Dialog, Text } from "@origin-digital/ods-core";

export default () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <Button onClick={() => setShowModal(true)}>Click me</Button>
        <Dialog
          id="dialog-hideclose"
          open={showModal}
          hideClose
          title="Modal title"
          onClose={() => setShowModal(false)}
        >
          <Text>Modal body</Text>
        </Dialog>
      </>
    );
  };
`,
      },
      {
        label: "Opaque background",
        description: ["Alternative backdrop - opaque"].join(" "),
        Code: () => {
          const [showModal, setShowModal] = React.useState(false);
          return (
            <>
              <Button onClick={() => setShowModal(true)}>Click me</Button>
              <Dialog
                id="dialog-opaque-bg"
                open={showModal}
                opaqueBackground
                title="Modal title"
                onClose={() => setShowModal(false)}
              >
                <Text>Modal body</Text>
              </Dialog>
            </>
          );
        },
        codeString: `import React from 'react';
import { Button, Dialog, Text } from "@origin-digital/ods-core";

export default () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <Button onClick={() => setShowModal(true)}>Click me</Button>
        <Dialog
          id="dialog-opaque-bg"
          open={showModal}
          opaqueBackground
          title="Modal title"
          onClose={() => setShowModal(false)}
        >
          <Text>Modal body</Text>
        </Dialog>
      </>
    );
  };
`,
      },
      {
        label: "Different max widths",
        description: ["T shirt sized max dialog widths"].join(" "),
        Code: () => {
          const [showModal, setShowModal] = React.useState(false);
          return (
            <>
              <Button onClick={() => setShowModal(true)}>Click me</Button>
              <Dialog
                id="dialog-max-widths"
                open={showModal}
                maxWidth="lg"
                title="Modal title"
                onClose={() => setShowModal(false)}
              >
                <Text>Modal body</Text>
              </Dialog>
            </>
          );
        },
        codeString: `import React from 'react';
import { Button, Dialog, Text } from "@origin-digital/ods-core";

export default () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <Button onClick={() => setShowModal(true)}>Click me</Button>
        <Dialog
          id="dialog-max-widths"
          open={showModal}
          maxWidth="lg"
          title="Modal title"
          onClose={() => setShowModal(false)}
        >
          <Text>Modal body</Text>
        </Dialog>
      </>
    );
  };
`,
      },
    ],
  },
  snippets: [],
};
