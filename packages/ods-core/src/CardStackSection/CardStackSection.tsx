import React, { ReactNode, ReactElement } from "react";
import styled, { css } from "styled-components";
import {
  CardStackSectionVariant,
  CardStackSize,
  BreakpointVariants,
  PaddingYVariants,
  SpaceVariants,
  ResponsiveProp,
} from "@origin-digital/ods-types";
import { Box, Stack, CardProps, BoxProps } from "@origin-digital/ods-core";
import {
  marginTop,
  marginBottom,
  MarginBottomProps,
  MarginTopProps,
} from "styled-system";

export interface CardStackSectionProps {
  "data-id"?: string;
  cardWidth?: CardStackSize;
  children: ReactElement<CardProps>[] | ReactElement<CardProps>;
  paddingY?: PaddingYVariants;
  variant?: CardStackSectionVariant;
}

const defaultVariant = "default";
const defaultCardWidth = "small";
const defaultPaddingY = "small";

const cardSizeForVariant: Record<
  CardStackSize,
  Record<Exclude<BreakpointVariants, "xs">, number>
> = {
  small: {
    sm: 508,
    md: 448,
    lg: 448,
    xl: 538,
  },
  medium: {
    sm: 508,
    md: 568,
    lg: 608,
    xl: 728,
  },
  large: {
    sm: 508,
    md: 568,
    lg: 768,
    xl: 918,
  },
};

interface CardSectionProps {
  cardSize: CardStackSize;
}

const CardSection = styled(Box)<CardSectionProps>`
${p => css`
  @media (min-width: ${p.theme.breakpoints.sm}) {
    max-width: ${cardSizeForVariant[p.cardSize].sm}px;
  }
`}

${p => css`
  @media (min-width: ${p.theme.breakpoints.md}) {
    max-width: ${cardSizeForVariant[p.cardSize].md}px;
  }
`}

${p => css`
  @media (min-width: ${p.theme.breakpoints.lg}) {
    max-width: ${cardSizeForVariant[p.cardSize].lg}px;
  }
`}

${p => css`
  @media (min-width: ${p.theme.breakpoints.xl}) {
    max-width: ${cardSizeForVariant[p.cardSize].xl}px;
  }
`}
`;

interface ResponsiveGridProps {
  cardWidth: CardStackSize;
  hideGutter?: boolean;
  children: ReactNode;
}

const ResponsiveCardMaxWidths = ({
  hideGutter,
  children,
  cardWidth = defaultCardWidth,
}: ResponsiveGridProps) => (
  <CardSection
    display="flex"
    flexDirection="column"
    justifyContent="center"
    width="full"
    cardSize={cardWidth}
    paddingX={{
      xs: !hideGutter ? "medium" : undefined,
    }}
  >
    {children}
  </CardSection>
);

const CardCenteredStack = ({
  children,
  "data-id": dataId,
  cardWidth = defaultCardWidth,
}: CardStackSectionProps) => (
  <Box
    display="flex"
    data-id={dataId}
    flexDirection="column"
    paddingY={{ xs: "xsmall", sm: "xsmall" }}
    alignItems="center"
    justifyContent={{ md: "center" }}
    height="full"
    width="full"
  >
    <ResponsiveCardMaxWidths cardWidth={cardWidth} hideGutter>
      {children}
    </ResponsiveCardMaxWidths>
  </Box>
);

interface WidgetContainerProps extends MarginBottomProps, MarginTopProps {}

const WidgetContainer = styled<Omit<BoxProps, "marginTop" | "marginBottom">>(
  Box,
)<WidgetContainerProps>`
  ${marginTop} ${marginBottom};
`;

const WidgetStack = ({
  children,
  "data-id": dataId,
  cardWidth = defaultCardWidth,
}: CardStackSectionProps) => (
  <Box width="full" data-id={dataId}>
    <Box
      backgroundColor="darkOrange"
      display={{ lg: "none" }}
      style={{ height: "120px" }}
      width="full"
    />
    <WidgetContainer
      display="flex"
      justifyContent="center"
      width="full"
      marginTop={{ xs: "-88px", lg: "48px" }}
      marginBottom={{ xs: "32px", lg: "48px" }}
    >
      <ResponsiveCardMaxWidths cardWidth={cardWidth}>
        <Stack space={["medium", "xlarge"]}>{children}</Stack>
      </ResponsiveCardMaxWidths>
    </WidgetContainer>
  </Box>
);

const cardPaddingYForVariant: Record<
  PaddingYVariants,
  ResponsiveProp<SpaceVariants>
> = {
  none: {
    xs: "none",
    sm: "xsmall",
    lg: "xxlarge",
  },
  small: ["xsmall", "xxlarge"],
  medium: ["xsmall", "xxxlarge"],
};

const DefaultCardStack = ({
  children,
  "data-id": dataId,
  cardWidth = defaultCardWidth,
  paddingY = defaultPaddingY,
}: CardStackSectionProps) => (
  <Box
    data-id={dataId}
    paddingY={cardPaddingYForVariant[paddingY]}
    display="flex"
    justifyContent="center"
    width="full"
  >
    <ResponsiveCardMaxWidths cardWidth={cardWidth} hideGutter>
      <Stack space={["xsmall", "xlarge"]}>{children}</Stack>
    </ResponsiveCardMaxWidths>
  </Box>
);

export const CardStackSection = ({
  children,
  "data-id": dataId,
  variant = defaultVariant,
  cardWidth = defaultCardWidth,
  paddingY = defaultPaddingY,
}: CardStackSectionProps) => {
  if (variant === "widget") {
    return (
      <WidgetStack data-id={dataId} cardWidth={cardWidth}>
        {children}
      </WidgetStack>
    );
  } else if (variant === "card-centered") {
    return (
      <CardCenteredStack data-id={dataId} cardWidth={cardWidth}>
        {children}
      </CardCenteredStack>
    );
  } else {
    return (
      <DefaultCardStack
        data-id={dataId}
        cardWidth={cardWidth}
        paddingY={paddingY}
      >
        {children}
      </DefaultCardStack>
    );
  }
};

CardStackSection.defaultProps = {
  "data-id": "card-stack-section",
  cardWidth: defaultCardWidth,
  paddingY: defaultPaddingY,
  variant: defaultVariant,
};

CardStackSection.displayName = "CardStackSection";
