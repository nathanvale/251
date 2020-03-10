import React from "react";
import { Box } from "@origin-digital/ods-core";
import { Text } from "@origin-digital/ods-lab";
import { ExampleDocs } from "@origin-digital/ods-types";
import { getCodeAsString } from "@origin-digital/ods-helpers";

interface CodeBlockProps {
  Code: ExampleDocs["Code"] | string;
}

export const CodeBlock = ({ Code }: CodeBlockProps) => (
  <Box backgroundColor="grey56" paddingY="xlarge" paddingX="medium">
    <Box component="pre" style={{ overflowY: "visible", overflowX: "visible" }}>
      {typeof Code === "string" ? (
        <Text color="grey16" component="code">
          {Code}
        </Text>
      ) : (
        <Text color="grey16" component="code">
          {getCodeAsString(Code)}
        </Text>
      )}
    </Box>
  </Box>
);
