import React, {ReactNode} from "react";
import {Box} from "@origin-digital/ods-core";
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from "@origin-digital/ods-helpers";
import styled, {css} from "styled-components";

export interface HiddenProps extends ResponsiveRangeProps {
  children: ReactNode;
  screen?: boolean;
  print?: boolean;
  inline?: boolean;
}

const StyledBox = styled(Box)<{hiddenOnPrint: boolean}>`
  ${p =>
    p.hiddenOnPrint
      ? css`
          @media print {
            display: none !important;
          }
        `
      : ``}
`;

export const Hidden = ({
  children,
  above,
  below,
  screen,
  print,
  inline,
}: HiddenProps) => {
  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);

  const [
    hiddenOnMobile,
    hiddenOnTablet,
    hiddenOnDesktop,
  ] = resolveResponsiveRangeProps({
    above,
    below,
  });

  const display = inline ? "inline" : "block";

  return (
    <StyledBox
      hiddenOnPrint={hiddenOnPrint}
      display={
        hiddenOnScreen
          ? "none"
          : {
              xs: hiddenOnMobile ? "none" : display,
              sm: hiddenOnMobile ? "none" : display,
              md: hiddenOnTablet ? "none" : display,
              lg: hiddenOnDesktop ? "none" : display,
              xl: hiddenOnDesktop ? "none" : display,
            }
      }
      component={inline ? "span" : "div"}
    >
      {children}
    </StyledBox>
  );
};

Hidden.displayName = "Hidden";

Hidden.defaultProps = {
  screen: false,
  print: false,
  inline: false,
};
