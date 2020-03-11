import React from "react";
import lzString from "lz-string";
import { Stack, Box, Section } from "@origin-digital/ods-core";
import { Text, Link } from "@origin-digital/ods-lab";
import { IconPlay, IconCopy } from "@origin-digital/ods-icons";
import copy from "copy-to-clipboard";
import { getCodeAsString } from "@origin-digital/ods-helpers";
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
}: ExampleProps) => {
  const snippet = getCodeAsString(Code);
  return (
    <Stack space="none">
      <Section>
        <DocsContainer>
          <Stack space="large">
            {label && (
              <Text color="grey56" weight="medium" size="xsmall">
                {label}
              </Text>
            )}
            {description && <Text color="grey56">{description}</Text>}
            <Box style={{ marginBottom: -20 }}>
              <Stack space="xxsmall">
                <CodeBlock Code={Code} />
                <Box display="flex" justifyContent="flex-end">
                  <Link onClick={() => copy(snippet)} Icon={<IconCopy />}>
                    Copy
                  </Link>
                  <Link
                    target="_blank"
                    component="a"
                    href={createUrl({
                      playroomUrl,
                      code: snippet,
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
      </Section>
      <Stack space="medium">
        <Section paddingY="none">
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
};
