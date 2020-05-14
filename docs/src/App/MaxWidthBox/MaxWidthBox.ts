import { maxWidth, MaxWidthProps } from "styled-system";
import { BoxProps, Box } from "@origin-digital/ods-core";

import styled from "styled-components";

interface MaxWidthBoxProps extends BoxProps, MaxWidthProps {}
export const MaxWidthBox = styled(Box)<MaxWidthBoxProps>`
  ${maxWidth}
`;

MaxWidthBox.defaultProps = {
  maxWidth: ["100%", "100%", "100%", "100%", "100%"],
};
