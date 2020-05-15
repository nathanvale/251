import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Text,
  TextLink,
  StackProps,
  Stack,
  Card,
  Box,
} from "@origin-digital/ods-core";

import { ComponentDocs } from "@origin-digital/ods-types";
import Code from "../Code/Code";
import { useConfig } from "../ConfigContext";
import { Props } from "../Props/Props";
import { Page, PageSection } from "../Page/Page";
import { firstLetterUpper } from "../utils";

export const propsTitle = "Component props";

interface ComponentDocProps {
  componentName: string;
  subfolder?: string;
  docs: ComponentDocs;
}

export const ComponentDoc = ({
  componentName,
  subfolder = "",
  docs,
}: ComponentDocProps) => {
  const { sourceUrlPrefix } = useConfig();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const componentFolder = `lib/components/${
    subfolder ? `${subfolder}/` : ""
  }${componentName}`;
  const examples = docs.examples || [];

  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;

  const filteredExamples = examples;

  if (!examples.additional) {
    examples.additional = [];
  }

  const Test = ({ Example, noCard, codeAsString, playroom }: any) => (
    <Stack space="medium">
      {Example ? (
        <Box style={{ border: "1px solid #e3e3e3" }}>
          {noCard ? (
            <Box backgroundColor="grey50">
              <Example />
            </Box>
          ) : (
            <Card>
              <Example />
            </Card>
          )}
        </Box>
      ) : null}
      {codeAsString ? <Code playroom={playroom}>{codeAsString}</Code> : null}
    </Stack>
  );

  const getCodeString = ({ Example, code }: any) => {
    const codeAsString =
      Example && !code
        ? // eslint-disable-next-line new-cap
          reactElementToJSXString(Example(), {
            useBooleanShorthandSyntax: false,
            showDefaultProps: false,
            showFunctions: true,
            filterProps: ["onChange", "onBlur", "onFocus"],
          })
        : code;

    return codeAsString;
  };

  const sections: PageSection[] = [
    ...filteredExamples?.additional?.map((example) => {
      const {
        label,
        description,
        Code: Example,
        codeString: code,
        playroom,
        noCard,
      } = example;
      const codeAsString = getCodeString({ Example, code });
      return {
        title: firstLetterUpper(label) || "",
        description,
        children: Test({ Example, noCard, codeAsString, playroom }),
      };
    }),
    {
      title: firstLetterUpper(propsTitle),
      children: (
        <Props<StackProps>
          variant={isLgUp ? "table" : "list"}
          componentName={componentName}
          propDescriptions={docs.propDescriptions || {}}
          specialRequiredProps={docs.specialRequiredProps || []}
          specialOptionalProps={docs.specialOptionalProps || []}
        />
      ),
    },
    {
      title: "Source Code on BitBucket",
      children: (
        <Text>
          <TextLink href={sourceUrl}>View Source</TextLink>
        </Text>
      ),
    },
  ].filter(Boolean);

  if (Object.entries(filteredExamples.default).length !== 0) {
    sections.unshift({
      title: "Default example",
      children: Test({
        playroom: filteredExamples.default.playroom,
        noCard: filteredExamples.default.noCard,
        Example: filteredExamples.default.Code,
        codeAsString: getCodeString({
          Example: filteredExamples.default.Code,
          code: filteredExamples.default.codeString,
        }),
      }),
    });
  }

  return (
    <Page
      title={componentName}
      description={docs.description}
      sections={sections}
    />
  );
};