import React, {ReactNode} from "react";
import lzString from "lz-string";
import reactElementToJSXString from "react-element-to-jsx-string";
import {Stack, Box, Text, Section, Link} from "@origin-digital/ods-core";
import {ContentSection} from "@origin-digital/ods-lab";
import {IconPlay} from "@origin-digital/ods-icons";
import styled from "styled-components";
import {maxWidth, MaxWidthProps} from "styled-system";
import {ExampleDocs} from "../types";

type ExampleProps = ExampleDocs;
interface CodeContainerProps {
  Container?: ExampleDocs["Container"];
  children: ReactNode;
}

const CodeContainer = ({Container, children}: CodeContainerProps) => {
  if (Container) {
    return <Container>{children}</Container>;
  } else {
    return <>{children}</>;
  }
};

interface CreateUrlOptions {
  baseUrl?: string;
  code: string;
}

const createUrl = ({baseUrl, code}: CreateUrlOptions) => {
  const data = JSON.stringify({code});
  const compressedData = lzString.compressToEncodedURIComponent(data);
  const path = `#?code=${compressedData}`;
  if (baseUrl) {
    if (window.location.hostname === "localhost") {
      baseUrl = "localhost:9999";
    }
    const trimmedBaseUrl = baseUrl.replace(/\/$/, "");
    return `http://${trimmedBaseUrl}/${path}`;
  }
  return path;
};

const StyledBox = styled(Box)<MaxWidthProps>`
  ${maxWidth}
`;

const getCodeAsString = (Example: ExampleDocs["Code"]) => {
  const codeAsString = reactElementToJSXString(Example(), {
    useBooleanShorthandSyntax: false,
    showDefaultProps: false,
    showFunctions: false,
    filterProps: ["onChange", "onBlur", "onFocus"],
  });

  return codeAsString;
};

export const Example = ({
  label,
  description,
  stretch,
  noSection,
  Code,
  Container,
}: ExampleProps) => (
  <Stack space="none">
    <ContentSection backgroundColor="white">
      <StyledBox maxWidth={[null, null, "75%", "66%"]}>
        <Stack space="large">
          {label && (
            <Text color="grey56" weight="medium" size="xsmall">
              {label}
            </Text>
          )}
          {description && <Text color="grey56">{description}</Text>}
          <Box style={{marginBottom: -20}}>
            <Stack space="xxsmall">
              <Box backgroundColor="grey56" paddingY="xlarge" paddingX="medium">
                <Box component="pre">
                  <Text color="grey16" component="code">
                    {getCodeAsString(Code)}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Link
                  target="_blank"
                  component="a"
                  href={createUrl({
                    baseUrl:
                      "docs.origindigital-dac.com.au/designsystem/playroom",
                    code: getCodeAsString(Code),
                  })}
                  Icon={<IconPlay />}
                >
                  Open in Playroom
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </StyledBox>
    </ContentSection>
    <Stack space="medium">
      <Box style={{height: stretch ? "600px" : undefined}}>
        <Box
          height="full"
          display="flex"
          paddingY="xlarge"
          justifyContent="center"
        >
          {noSection ? (
            <CodeContainer Container={Container}>
              <Code />
            </CodeContainer>
          ) : (
            <Section>
              {
                <StyledBox maxWidth={[null, null, "75%", "66%"]}>
                  <CodeContainer Container={Container}>
                    <Code />
                  </CodeContainer>
                </StyledBox>
              }
            </Section>
          )}
        </Box>
      </Box>
    </Stack>
  </Stack>
);
