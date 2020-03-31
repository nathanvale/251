import React from "react";
import { Box } from "@origin-digital/ods-core";
import { Text } from "@origin-digital/ods-lab";
import { ExampleDocs } from "@origin-digital/ods-types";
import { getCodeAsString } from "@origin-digital/ods-scripts";

interface CodeBlockProps {
  Code: ExampleDocs["Code"] | string;
}

export const CodeBlock = ({ Code }: CodeBlockProps) => (
  <Box backgroundColor="grey600" paddingY="xlarge" paddingX="medium">
    <Box component="pre" style={{ overflowY: "visible", overflowX: "visible" }}>
      {Code instanceof String ? (
        <Text color="grey200" component="code">
          {Code}
        </Text>
      ) : (
        <Text color="grey200" component="code">
          {getCodeAsString(Code as ExampleDocs["Code"])}
        </Text>
      )}
    </Box>
  </Box>
);
