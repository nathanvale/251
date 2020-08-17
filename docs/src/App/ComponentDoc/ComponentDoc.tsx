import React from "react";
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
import { getComponentPackage } from "../navigationHelpers";

let snippets = {};
try {
  snippets = require("../../snippets-components.json");
} catch (error) {}

export const propsTitle = "Component props";
export const missingSnippet = `Missing code snippet. Run yarn docs:snippets to compile.`;

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
  const packageName = getComponentPackage(componentName);
  const componentFolder = `packages/${packageName}/src/${
    subfolder ? `${subfolder}/` : ""
  }${componentName}`;
  const examples = docs.examples || [];

  if (!componentName.startsWith("Icon") && componentName !== "IconButton") {
    const defaultSnippet = (snippets as any)[componentName]?.default;
    if (defaultSnippet === undefined) {
      examples.default.codeString = missingSnippet;
    } else {
      examples.default.codeString = defaultSnippet;
    }

    examples.additional = examples.additional?.map((example, index) => {
      const codeString =
        (snippets as any)[componentName]?.additional[index] || missingSnippet;
      return {
        ...example,
        codeString,
      };
    });
  }

  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;

  if (!examples.additional) {
    examples.additional = [];
  }
  const filteredExamples = examples;

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
          ""
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
  ].filter(Boolean);

  if (!componentName.startsWith("Icon") && componentName !== "IconButton") {
    sections.push({
      title: "Source Code on BitBucket",
      children: (
        <Text>
          <TextLink href={sourceUrl}>View Source</TextLink>
        </Text>
      ),
    });
  }

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

  sections.unshift({
    title: "Usage",
    isLab: packageName === "ods-lab",
    description:
      packageName === "ods-lab" ? (
        <Text>
          {componentName} is currently an experimental component in the{" "}
          <code>@origin-digital/ods-lab</code> package. Please be aware
          experimental lab components have an API that is subject to change.
        </Text>
      ) : (
        ""
      ),
    children: (
      <Code>{`import {${componentName}} from "@origin-digital/${packageName}"`}</Code>
    ),
  });

  return (
    <Page
      title={componentName}
      description={docs.description}
      sections={sections}
    />
  );
};
