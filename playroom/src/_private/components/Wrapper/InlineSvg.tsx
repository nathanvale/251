import * as React from "react";
import styled from "styled-components";

const InheritSpan = styled.span`
  font: inherit;
`;

interface Props {
  html: string;
  [x: string]: any;
}

export const DangerousHtml = ({ html, ...props }: Props) => (
  <InheritSpan dangerouslySetInnerHTML={{ __html: html }} {...props} />
);

export const InlineSvg = ({ html, ...props }: any) => (
  <DangerousHtml html={html} data-comment="InlineSvg" {...props} />
);
