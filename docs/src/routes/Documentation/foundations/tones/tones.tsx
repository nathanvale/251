/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from "react";
import { Page } from "docs/src/types";
import { DocsText } from "@origin-digital/ods-lab";
import { ToneVariants } from "@origin-digital/ods-types";
import {
  Columns,
  Column,
  Stack,
  Hidden,
  Box,
  Divider,
} from "@origin-digital/ods-core";
import styled from "styled-components";
import { TextStack } from "../../components/TextStack/TextStack";

const Heading = ({ children }: { children: ReactNode }) => (
  <DocsText color="grey600" weight="medium" size="xsmall">
    {children}
  </DocsText>
);

const tones: Exclude<ToneVariants, "grey" | "background">[] = [
  "caution",
  "critical",
  "info",
  "positive",
  "primary",
  "primaryB",
  "promote",
  "promoteB",
  "secondary",
  "secondaryB",
];

const usageTypes = [
  "UI",
  "Messaging",
  "Status",
  "Graphs",
  "Time",
  "Payments",
] as const;
type Usage = typeof usageTypes[number];
interface ColourDoc {
  description: string;
  swatch: Exclude<ToneVariants, "grey" | "background">;
  usage: Record<Usage, string[]>;
}
const toneDocs: Record<
  Exclude<ToneVariants, "grey" | "background">,
  ColourDoc
> = {
  critical: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "critical",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["Overdue"],
    },
  },
  caution: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "caution",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  positive: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "positive",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  info: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "info",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  promote: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "promote",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  primary: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "primary",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  primaryB: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "primaryB",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  promoteB: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "promoteB",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  secondary: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "secondary",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
  secondaryB: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    swatch: "secondaryB",
    usage: {
      UI: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Graphs: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Messaging: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Payments: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Status: ["bullet point 1", "bullet point 2", "bullet point 3"],
      Time: ["bullet point 1", "bullet point 2", "bullet point 3"],
    },
  },
};

const Rectangle = styled(Box)`
  border-radius: 3px;
  height: 50px;
`;
const Square = styled(Box)`
  border-radius: 3px;
  width: 50px;
  height: 50px;
`;

const ToneDefinition = ({
  tone,
}: {
  tone: Exclude<ToneVariants, "grey" | "background">;
}) => {
  const { swatch, description, usage } = toneDocs[tone];

  return (
    <Stack space="small">
      <Columns space="medium" alignY="center">
        <Column width="content">
          <Square backgroundColor={swatch} />
        </Column>
        <Column>
          <Box display="flex" alignItems="center">
            <Heading>{tone}</Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space={["xsmall", "medium"]} collapseBelow="md">
        <Column width="content">
          <Hidden below="md">
            <Box padding="large" />
          </Hidden>
        </Column>
        <Column>
          <TextStack space="large">
            <DocsText>{description}</DocsText>

            {usageTypes.map((usageType) =>
              usage[usageType].length > 0 ? (
                <Columns
                  key={usageType}
                  space={["medium", "large"]}
                  collapseBelow="md"
                >
                  <Column width="1/6">
                    <DocsText>{usageType}</DocsText>
                  </Column>
                  <Column>
                    <Stack space="small">
                      {usage[usageType].map((usageItem, index) => (
                        <DocsText key={index}>- {usageItem}</DocsText>
                      ))}
                    </Stack>
                  </Column>
                </Columns>
              ) : null
            )}
          </TextStack>
        </Column>
      </Columns>
    </Stack>
  );
};

function TonePage() {
  return (
    <TextStack>
      <Stack space={["xxlarge", "xxxlarge"]}>
        {" "}
        <DocsText color="grey600" size="xlarge">
          Tones
        </DocsText>
        <DocsText color="grey600" size="xsmall">
          The usage of colour in the system is designed to have a strong
          correlation with the tone of voice being used. The system makes
          available a spectrum of tones which are leveraged across the entire
          component suite.
        </DocsText>
        <Columns space={["small", "medium"]}>
          {tones.map((tone) => (
            <Column key={tone}>
              <Stack space={["none", "xsmall"]}>
                <Rectangle
                  backgroundColor={toneDocs[tone].swatch}
                  width="full"
                />
                <Hidden below="md">
                  <Box textAlign="center">
                    <DocsText size="xxxsmall">{tone}</DocsText>
                  </Box>
                </Hidden>
              </Stack>
            </Column>
          ))}
        </Columns>
      </Stack>

      <Divider />

      {tones.map((tone) => (
        <ToneDefinition key={tone} tone={tone} />
      ))}
    </TextStack>
  );
}

export const page: Page = {
  title: "Tones",
  // eslint-disable-next-line react/display-name
  Component: TonePage,
};
