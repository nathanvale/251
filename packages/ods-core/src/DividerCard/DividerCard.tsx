import React, { Children } from "react";
import styled, { css } from "styled-components";
import {
  ResponsiveSpace,
  BreakpointVariants,
  CardPaddingVariants,
  RequiredWithoutChildren,
  Theme,
} from "@origin-digital/ods-types";
import { mapToStyledSystem } from "@origin-digital/ods-helpers";
import { Box, BoxProps } from "../Box/Box";
import {
  defaultCardProps,
  cardPaddingForVariant,
  CardProps,
} from "../Card/Card";
import { Stack, StackChild, StackChildProps } from "../Stack/Stack";

export interface DividerCardProps extends CardProps {
  space?: ResponsiveSpace;
}
const dividerCardDefaultProps: RequiredWithoutChildren<DividerCardProps> = {
  "data-id": "divider-card",
  padding: defaultCardProps.padding,
  backgroundColor: defaultCardProps.backgroundColor,
  space: Stack.defaultProps.space,
};

interface DividerCardChildProps {
  cardPadding: CardPaddingVariants;
}

const childPadding = ({
  cardPadding,
  screenSize,
  theme,
}: DividerCardChildProps & {
  screenSize: BreakpointVariants;
  theme: Theme;
}) => {
  const paddingX = cardPaddingForVariant[cardPadding].paddingX[screenSize];

  return css`
    ${paddingX
      ? `
          padding-left: ${theme.space[paddingX]}px;
          padding-right: ${theme.space[paddingX]}px;

          &:not(:empty) ~ div:not(:empty):before,
          &:nth-child(n + 2):before {
            margin-left: -${theme.space[paddingX]}px;
            margin-right: -${theme.space[paddingX]}px;
          }
        `
      : ``}
  `;
};

const DividerCardChild = styled<
  DividerCardChildProps & StackChildProps & BoxProps
>(({ cardPadding, ...stackChildProps }) => <StackChild {...stackChildProps} />)`
  ${({ cardPadding, theme }) => {
    const screens: BreakpointVariants[] = ["sm", "md", "lg", "xl"];
    return css`
      ${childPadding({ theme, cardPadding, screenSize: "xs" })}

      ${screens.map(
        (screenSize) => css`
          @media (min-width: ${theme.breakpoints[screenSize]}) {
            ${childPadding({ theme, cardPadding, screenSize })}
          }
        `
      )}
    `;
  }}
`;

export const DividerCard = ({
  backgroundColor = dividerCardDefaultProps.backgroundColor,
  children,
  padding = dividerCardDefaultProps.padding,
  space,
  "data-id": dataId,
}: DividerCardProps) => {
  const stackItems = Children.toArray(children);
  const { paddingY } = cardPaddingForVariant[padding];

  return (
    <Box
      data-id={dataId}
      display="block"
      width="full"
      backgroundColor={backgroundColor}
      paddingY={paddingY}
    >
      {stackItems.flatMap((child, index) => {
        return (
          <DividerCardChild
            divider
            display="block"
            key={index}
            data-id="divider-card-child"
            space={mapToStyledSystem(space)}
            cardPadding={padding}
          >
            {child}
          </DividerCardChild>
        );
      })}
    </Box>
  );
};

DividerCard.defaultProps = dividerCardDefaultProps;
DividerCard.displayName = "DividerCard";
