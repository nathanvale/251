import React, { ReactChild } from "react";
import { IconFileCopy, IconPlayCircleOutline } from "@origin-digital/ods-icons";
import copy from "copy-to-clipboard";
import lzString from "lz-string";

import {
  Box,
  Stack,
  Text,
  TextLink,
  TextLinkRenderer,
} from "@origin-digital/ods-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useConfig } from "../ConfigContext";
import editorTheme from "./editorTheme";

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

const formatSnippet = (snippet: any) => snippet;

interface CodeProps {
  playroom?: boolean;
  children: ReactChild;
  codeString?: string;
}
export default ({ playroom = true, children, codeString }: CodeProps) => {
  const { playroomUrl } = useConfig();

  const snippet = formatSnippet(
    typeof children === "string" ? children : children
  );

  return (
    <Box
      position="relative"
      style={{
        maxWidth: 864,
      }}
    >
      <Stack space="medium">
        {typeof children !== "string" && (
          <Box style={{ border: "1px solid #e3e3e3" }}>{children}</Box>
        )}
        <Box
          position="relative"
          paddingY="xlarge"
          paddingX="medium"
          style={{
            background: "#232323",
            overflowX: "auto",
          }}
        >
          <Text component="pre">
            <SyntaxHighlighter language="tsx" style={editorTheme}>
              {codeString || snippet}
            </SyntaxHighlighter>
          </Text>
        </Box>
      </Stack>
      <Box
        display="flex"
        justifyContent="flex-end"
        paddingTop="small"
        paddingX="small"
      >
        <Text variant="body-small">
          <TextLinkRenderer>
            {({ textLinkStyles }) => (
              <button onClick={() => copy(snippet)} className={textLinkStyles}>
                <Box display="flex" alignItems="center">
                  <IconFileCopy tone="neutral" />
                  <Box style={{ width: "4px" }} />
                  <span>Copy</span>
                </Box>
              </button>
            )}
          </TextLinkRenderer>
        </Text>

        {/^import/m.test(snippet) || !playroom ? null : (
          <>
            <Box paddingLeft="xxsmall" />
            <Text variant="body-small">
              <TextLink
                target="_blank"
                href={createUrl({
                  playroomUrl,
                  code: codeString || snippet,
                })}
              >
                <Box display="flex" alignItems="center">
                  <IconPlayCircleOutline tone="neutral" />
                  <Box style={{ width: "4px" }} />
                  <span>Open in Playroom</span>
                </Box>
                <Box />
              </TextLink>
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};
