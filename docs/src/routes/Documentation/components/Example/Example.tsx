import React from "react";
import lzString from "lz-string";
import {Stack, Box, Section} from "@origin-digital/ods-core";
import {ContentSection, Text, Link} from "@origin-digital/ods-lab";
import {IconPlay} from "@origin-digital/ods-icons";
import {getCodeAsString} from "docs/src/shared/getCodeAsString";
import {ExampleDocs} from "../../../../types";
import {DocsContainer} from "../DocsContainer/DocsContainer";
import {CodeExample} from "../CodeExample/CodeExample";
import {CodeBlock} from "../CodeBlock/CodeBlock";

type ExampleProps = ExampleDocs;

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
      <DocsContainer>
        <Stack space="large">
          {label && (
            <Text color="grey56" weight="medium" size="xsmall">
              {label}
            </Text>
          )}
          {description && <Text color="grey56">{description}</Text>}
          <Box style={{marginBottom: -20}}>
            <Stack space="xxsmall">
              <CodeBlock Code={Code} />
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
      </DocsContainer>
    </ContentSection>
    <Stack space="medium">
      <Section backgroundColor="white">
        <CodeExample
          Container={Container}
          Code={Code}
          noSection={noSection}
          stretch={stretch}
        />
      </Section>
    </Stack>
  </Stack>
);
