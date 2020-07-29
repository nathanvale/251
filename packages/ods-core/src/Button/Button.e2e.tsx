import React from "react";
import { IconCheck } from "@origin-digital/ods-icons";
import { E2ETests } from "@origin-digital/ods-types";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Button } from "./Button";

export const tests: E2ETests = [
  {
    label: "Contained button",
    Code: () => <Button>Primary</Button>,
  },
  {
    label: "Contained button disabled",
    Code: () => <Button disabled>Primary</Button>,
  },
  {
    label: "Contained button secondary",
    Code: () => <Button color="secondary">Secondary</Button>,
  },
  {
    label: "Contained button secondary disabled",
    Code: () => (
      <Button disabled color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Secondary button",
    Code: () => <Button variant="outlined">Primary</Button>,
  },
  {
    label: "Secondary button disabled",
    Code: () => (
      <Button variant="outlined" disabled>
        Primary
      </Button>
    ),
  },
  {
    label: "Secondary button secondary",
    Code: () => (
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Secondary button secondary disabled",
    Code: () => (
      <Button variant="outlined" disabled color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Text button",
    Code: () => <Button variant="outlined">Primary</Button>,
  },
  {
    label: "Text button disabled",
    Code: () => (
      <Button variant="outlined" disabled>
        Primary
      </Button>
    ),
  },
  {
    label: "Text button secondary",
    Code: () => (
      <Button variant="outlined" color="secondary">
        Text
      </Button>
    ),
  },
  {
    label: "Text button secondary disabled",
    Code: () => (
      <Button variant="outlined" disabled color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Text button no padding",
    Code: () => (
      <Stack space="medium" alignX="left">
        <Button noTextPadding variant="text">
          Primary
        </Button>
        <Text>This text should left-align with the button above</Text>
      </Stack>
    ),
  },
  {
    label: "Link button",
    Code: () => (
      <Button
        href="https://www.originenergy.com.au"
        target="_blank"
        variant="text"
      >
        Origin website
      </Button>
    ),
  },
  {
    label: "Full width button Full width",
    Code: () => (
      <Stack alignX="left" space="small">
        <Button fullWidth={true}>Full width</Button>
      </Stack>
    ),
  },
  {
    label: "Full width button on xs, sm, md",
    Code: () => (
      <Stack alignX="left" space="small">
        <Button fullWidth={[true, false]}>Full width on xs, sm, md</Button>
      </Stack>
    ),
  },
  {
    label: "Full width button on xs, sm",
    Code: () => (
      <Stack alignX="left" space="small">
        <Button
          fullWidth={{
            lg: false,
            md: false,
            sm: true,
            xl: false,
            xs: true,
          }}
        >
          Full width on xs, sm
        </Button>
      </Stack>
    ),
  },
  {
    label: "Button with icon medium",
    Code: () => <Button icon={<IconCheck />}>Medium</Button>,
  },
  {
    label: "Button with icon small",
    Code: () => (
      <Button size="small" icon={<IconCheck />}>
        Small
      </Button>
    ),
  },
  {
    label: "Inverse contained button",
    Code: () => <Button inverse>Primary</Button>,
  },
  {
    label: "Inverse contained button disabled",
    Code: () => (
      <Button inverse disabled>
        Primary
      </Button>
    ),
  },
  {
    label: "Inverse contained button secondary",
    Code: () => (
      <Button inverse color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Inverse contained button secondary disabled",
    Code: () => (
      <Button inverse disabled color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Inverse secondary button",
    Code: () => (
      <Button inverse variant="outlined">
        Primary
      </Button>
    ),
  },
  {
    label: "Inverse secondary button disabled",
    Code: () => (
      <Button inverse variant="outlined" disabled>
        Primary
      </Button>
    ),
  },
  {
    label: "Inverse secondary button secondary",
    Code: () => (
      <Button inverse variant="outlined" color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Inverse secondary button secondary disabled",
    Code: () => (
      <Button inverse variant="outlined" disabled color="secondary">
        Secondary
      </Button>
    ),
  },
  {
    label: "Inverse text button",
    Code: () => (
      <Button inverse variant="outlined">
        Primary
      </Button>
    ),
  },
  {
    label: "Inverse text button disabled",
    Code: () => (
      <Button inverse variant="outlined" disabled>
        Primary
      </Button>
    ),
  },
  {
    label: "Inverse text button secondary",
    Code: () => (
      <Button inverse variant="outlined" color="secondary">
        Text
      </Button>
    ),
  },
  {
    label: "Inverse text button secondary disabled",
    Code: () => (
      <Button inverse variant="outlined" disabled color="secondary">
        Secondary
      </Button>
    ),
  },
];
