import styled from "styled-components";
import { Box } from "@origin-digital/ods-core";
import { WidthProps, width } from "styled-system";

export const Rectangle = styled<any>(Box)<WidthProps>`
  width: 50px;
  ${width}
  border-radius: 3px;
  height: 50px;
`;
