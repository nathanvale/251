import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as codeStyles } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeBlockProps {
  value: string;
  language?: string;
}

export const DiffCodeBlock = ({ value, language }: CodeBlockProps) => (
  <SyntaxHighlighter language={language} style={codeStyles}>
    {value}
  </SyntaxHighlighter>
);
