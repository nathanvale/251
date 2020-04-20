import React from "react";
import lzString from "lz-string";
import { Stack, Box, Section } from "@origin-digital/ods-core";
import { DocsText, Link } from "@origin-digital/ods-lab";
import { IconPlay, IconCopy } from "@origin-digital/ods-icons";
import copy from "copy-to-clipboard";
import { getCodeAsString } from "@origin-digital/ods-scripts";
import { ExampleDocs } from "@origin-digital/ods-types";
import { DocsContainer } from "../DocsContainer/DocsContainer";
import { CodeExample } from "../CodeExample/CodeExample";
import { CodeBlock } from "../CodeBlock/CodeBlock";

interface ExampleProps extends ExampleDocs {
  playroomUrl: string;
}

interface CreateUrlOptions {
  playroomUrl: string;
  code: string;
}

const createUrl = ({ playroomUrl, code }: CreateUrlOptions) => {
  const data = JSON.stringify({ code });
  const compressedData = lzString.compressToEncodedURIComponent(data);
  const path = `/#?code=${compressedData}`;
  return playroomUrl + path;
};

export const Example = ({
  label,
  description,
  stretch,
  noSection,
  Code,
  Container,
  playroomUrl,
  playroom = true,
  codeString,
}: ExampleProps) => {
  let snippet = "";
  if (Code) {
    snippet = getCodeAsString(Code);
  }
  if (codeString) {
    snippet = codeString;
  }

  return (
    <Stack space="none">
      <Section>
        <DocsContainer>
          <Stack space="large">
            {label && (
              <DocsText color="grey600" weight="medium" size="xsmall">
                {label}
              </DocsText>
            )}
            {description && <DocsText color="grey600">{description}</DocsText>}
            <Box style={{ marginBottom: -20 }}>
              <Stack space="xxsmall">
                {snippet && <CodeBlock codeString={snippet} />}
                <Box display="flex" justifyContent="flex-end">
                  {snippet && (
                    <Link onClick={() => copy(snippet)} Icon={<IconCopy />}>
                      Copy
                    </Link>
                  )}
                  {playroom && Code && (
                    <Link
                      target="_blank"
                      component="a"
                      href={createUrl({
                        playroomUrl,
                        code: getCodeAsString(Code),
                      })}
                      Icon={<IconPlay />}
                    >
                      Open in Playroom
                    </Link>
                  )}
                </Box>
              </Stack>
            </Box>
          </Stack>
        </DocsContainer>
      </Section>
      <Stack space="medium">
        <Section paddingY="none">
          {Code && (
            <CodeExample
              Container={Container}
              Code={Code}
              noSection={noSection}
              stretch={stretch}
            />
          )}
        </Section>
      </Stack>
    </Stack>
  );
};
