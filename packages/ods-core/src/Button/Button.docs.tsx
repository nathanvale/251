import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { IconEmail } from "@origin-digital/ods-icons";
import { Stack } from "../Stack/Stack";
import { Columns } from "../Columns/Columns";
import { Column } from "../Column/Column";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import { Button, ButtonProps } from "./Button";

export const docs: ComponentDocs<ButtonProps> = {
  category: "Interaction",
  componentName: "Button",
  description: [
    "This is the atomic Button component fully styled according to Origin design system.",
  ].join(" "),
  propDescriptions: {
    buttonRef:
      "A React Ref object that allows accessing the underlying element",
    children: "The text to show on the button",
    color: [
      "The button could either of 2 colours:",
      "(1) 'primary': picks up theme.palette.primary color;",
      "(2) 'secondary': picks up theme.palette.grey[500] color.",
    ].join(" "),
    component: "The type of React element underneath this component.",
    "data-id":
      "The Button identifier that could be used for tracking and e2e testing purposes",
    fullWidth:
      "This is a responsiveProp, When true the button will take up the whole width of its parent on the defined screens.",
    href:
      "If provided the underlying element will be automatically set to <a/> and the href value is passed to it.",
    icon: "The icon to be shown before the Button text.",
    id: `The unique id of the Button, useful for accessibility.`,
    inverse: [
      "Use this when the button is shown on a dark background.",
      "This will flip the color and backgroundColor/borderColor accordingly to make sure the button is properly visible",
    ].join(" "),
    noTextPadding: [
      `Only applicable to variant="text", cancels out the padding by a negative margin.`,
      `This allows the button to look in harmony with text above or below it.`,
    ].join(" "),
    size:
      "The size of the button. This property is NOT responsive. This size should be set to small when using the text variant.",
    spinner: [
      "When true, will disable the Button and show a spinner on top of it.",
      "If the button is already disabled (`disabled={true}`), it won't show the",
      "spinner even if `spinner={true}`",
    ].join(" "),
    variant:
      "The button could visually have 3 variations as defined by this value",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => <Button>Button</Button>,
    },
    additional: [
      {
        label: "Contained Button",
        Code: () => (
          <Stack space="medium">
            <Columns space="medium">
              <Column width="content">
                <Button>Primary</Button>
              </Column>
              <Column>
                <Button disabled>Primary</Button>
              </Column>
            </Columns>
            <Columns space="medium">
              <Column width="content">
                <Button color="secondary">Secondary</Button>
              </Column>
              <Column>
                <Button disabled color="secondary">
                  Secondary
                </Button>
              </Column>
            </Columns>
          </Stack>
        ),
        codeString: `<Box>
   <Button>Primary</Button>
   <Button disabled>Primary</Button>
   <Button color="secondary">Secondary</Button>
   <Button disabled color="secondary">Secondary</Button>
</Box>`,
      },
      {
        label: "Outlined Button",
        Code: () => (
          <Stack space="medium">
            <Columns space="medium">
              <Column width="content">
                <Button variant="outlined">Primary</Button>
              </Column>
              <Column>
                <Button disabled variant="outlined">
                  Primary
                </Button>
              </Column>
            </Columns>
            <Columns space="medium">
              <Column width="content">
                <Button variant="outlined" color="secondary">
                  Secondary
                </Button>
              </Column>
              <Column>
                <Button disabled variant="outlined" color="secondary">
                  Secondary
                </Button>
              </Column>
            </Columns>
          </Stack>
        ),
        codeString: `<Box>
  <Button variant="outlined">Primary</Button>
  <Button disabled variant="outlined">Primary</Button>
  <Button variant="outlined" color="secondary">Secondary</Button>
  <Button disabled variant="outlined" color="secondary">Secondary</Button>
</Box>`,
      },
      {
        label: "Text Button",
        Code: () => (
          <Stack space="medium">
            <Columns space="medium">
              <Column width="content">
                <Button variant="text" size="small">
                  Primary
                </Button>
              </Column>
              <Column>
                <Button disabled variant="text" size="small">
                  Primary
                </Button>
              </Column>
            </Columns>
            <Columns space="medium">
              <Column width="content">
                <Button variant="text" color="secondary" size="small">
                  Secondary
                </Button>
              </Column>
              <Column>
                <Button disabled variant="text" color="secondary" size="small">
                  Secondary
                </Button>
              </Column>
            </Columns>
          </Stack>
        ),
        codeString: `<Box>
  <Button variant="text">Primary</Button>
  <Button disabled variant="text">Primary</Button>
  <Button variant="text" color="secondary">Secondary </Button>
  <Button disabled variant="text" color="secondary">Secondary</Button>
</Box>`,
      },
      {
        label: "Text Button",
        description:
          "To left-align with text under or above it the padding is cancelled by negative margins",
        Code: () => (
          <Stack space="medium" alignX="left">
            <Button noTextPadding variant="text" size="small">
              Primary
            </Button>
            <Text>This text should left-align with the button above</Text>
          </Stack>
        ),
        codeString: `<Stack space="medium" alignX="left">
  <Button noTextPadding variant="text" size="small">
    Primary
  </Button>
  <Text>This text should left-align with the button above</Text>
</Stack>`,
      },
      {
        label: "Link Button",
        description: "A button with href will render an <a /> tag.",
        Code: () => (
          <Button
            variant="text"
            href="https://www.originenergy.com.au"
            target="_blank"
            size="small"
          >
            Origin website
          </Button>
        ),
      },
      {
        label: "FullWidth Button",
        description: "A button that takes up the full width of its container.",
        Code: () => (
          <Stack alignX="left" space="small">
            <Button fullWidth>Full width</Button>
            <Button fullWidth={[true, false]}>Full width on xs, sm, md</Button>
            <Button
              fullWidth={{
                xs: true,
                sm: true,
                md: false,
                lg: false,
                xl: false,
              }}
            >
              Full width on xs, sm
            </Button>
          </Stack>
        ),
      },
      {
        label: "Button with Icon",
        description: "Button can render an icon before the text",
        Code: () => (
          <Box>
            <Button icon={<IconEmail tone="white" />}>Medium</Button>
            <Box style={{ display: "inline-block", width: "20px" }} />
            <Button size="small" icon={<IconEmail tone="white" />}>
              Small
            </Button>
          </Box>
        ),
        playroom: false,
        codeString: `<Box>
  <Button icon={<IconEmail tone="white" />}>Medium</Button>
  <Box style={{ display: "inline-block", width: "20px" }} />
  <Button size="small" icon={<IconEmail tone="white" />}>
    Small
  </Button>
</Box>`,
      },
      {
        label: "Button sizes",
        description:
          "Buttons can have 2 different sizes, 'medium' being the default.",
        Code: () => (
          <>
            <Box>
              <Button size="small">Small</Button>
              <Box style={{ display: "inline-block", width: "20px" }} />
              <Button size="medium">Medium</Button>
            </Box>
          </>
        ),
        codeString: `<Box>
  <Button size="small">Small</Button>
  <Button size="medium">Medium</Button>
</Box>`,
      },
      {
        label: "Inverse Button",
        description:
          "Button can swap out its color and background-color if is rendered on a dark background",
        Code: () => (
          <Box backgroundColor="grey600" height="full" padding="medium">
            <Columns space="small">
              <Column>
                <Stack space="small">
                  <Button inverse>Contained</Button>
                  <Button inverse variant="outlined">
                    Outlined
                  </Button>
                  <Button inverse variant="text">
                    Text
                  </Button>
                  <Button inverse disabled>
                    Disabled
                  </Button>
                  <Button inverse disabled variant="text">
                    Disabled
                  </Button>
                </Stack>
              </Column>
              <Column>
                {" "}
                <Stack space="small">
                  <Button inverse color="secondary">
                    Contained
                  </Button>

                  <Button inverse variant="outlined" color="secondary">
                    Outlined
                  </Button>

                  <Button inverse variant="text" color="secondary">
                    Text
                  </Button>

                  <Button inverse disabled variant="outlined" color="secondary">
                    Disabled
                  </Button>

                  <Button inverse disabled variant="text" color="secondary">
                    Disabled
                  </Button>
                </Stack>
              </Column>
            </Columns>
          </Box>
        ),
        codeString: `<Box>
  <Button inverse>Contained</Button>
  <Button inverse variant="outlined">Outlined</Button>
  <Button inverse variant="text">Text</Button>
  <Button inverse disabled>Disabled</Button>

  <Button inverse color="secondary">Contained</Button>
  <Button inverse variant="outlined" color="secondary">Outlined</Button>
  <Button inverse variant="text" color="secondary">Text</Button>
  <Button inverse disabled color="secondary">Disabled</Button>
</Box>`,
      },
      {
        label: "Button with action",
        description: "Button has onClick handler",
        // eslint-disable-next-line no-alert
        Code: () => <Button onClick={(e) => alert(e.target)}>Click !</Button>,
      },
      {
        label: "Button with spinner",
        description: "Turn spinner on",
        Code: () => <Button spinner>Submit</Button>,
      },
    ],
  },
  snippets: [
    {
      label: "Simple case - 2 Buttons",
      Code: () => (
        <Columns space="small">
          <Column width="content">
            <Button>Primary</Button>
          </Column>
          <Column>
            <Button color="secondary" variant="outlined">
              Secondary
            </Button>
          </Column>
        </Columns>
      ),
    },
    {
      label: "Full width",
      Code: () => <Button fullWidth>Submit form</Button>,
    },
    {
      label: "Full width array",
      Code: () => (
        <Button fullWidth={[true, false]}>Full width on small</Button>
      ),
    },
    {
      label: "Full width object",
      Code: () => (
        <Button
          fullWidth={{
            xs: true,
            sm: true,
            md: false,
            lg: false,
            xl: false,
          }}
        >
          Full width on small
        </Button>
      ),
    },
    {
      label: "Link Button",
      Code: () => (
        <Button
          variant="text"
          href="https://www.originenergy.com.au"
          target="_blank"
        >
          Origin website
        </Button>
      ),
    },
    {
      label: "Small",
      Code: () => <Button size="small">Small</Button>,
    },
    {
      label: "Text Button",
      Code: () => (
        <Columns space="small">
          <Column width="content">
            <Button variant="text">Primary</Button>
          </Column>
          <Column>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
          </Column>
        </Columns>
      ),
    },
    {
      label: "Button with spinner",
      Code: () => <Button spinner>Submit</Button>,
    },
  ],
};
