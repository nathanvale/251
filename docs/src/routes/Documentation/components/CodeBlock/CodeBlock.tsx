import React from "react";
import { Box } from "@origin-digital/ods-core";
import { DocsText } from "@origin-digital/ods-lab";

interface CodeBlockProps {
  codeString: string;
}

export const CodeBlock = ({ codeString }: CodeBlockProps) => (
  <Box backgroundColor="grey600" paddingY="xlarge" paddingX="medium">
    <Box component="pre" style={{ overflowY: "visible", overflowX: "visible" }}>
      {
        <DocsText color="grey200" component="code">
          {codeString}
        </DocsText>
      }
    </Box>
  </Box>
);
