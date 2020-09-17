import React, { ReactNode } from "react";
import {
  BreakpointVariants,
  SpaceVariants,
  CardPaddingVariants,
  CardBackgroundVariant,
  RequiredWithoutChildren,
} from "@origin-digital/ods-types";
import { Box } from "../Box";

export interface CardProps {
  padding?: CardPaddingVariants;
  "data-id"?: string;
  children?: ReactNode;
  backgroundColor?: CardBackgroundVariant;
}

export const defaultCardProps: RequiredWithoutChildren<CardProps> = {
  "data-id": "card",
  padding: "small",
  backgroundColor: "white",
};

type PaddingValues = Partial<Record<BreakpointVariants, SpaceVariants>>;

export const cardPaddingForVariant: Record<
  CardPaddingVariants,
  {
    paddingX: PaddingValues;
    paddingY: PaddingValues;
  }
> = {
  small: {
    paddingX: {
      xs: "medium",
      sm: "xlarge",
    },
    paddingY: {
      xs: "large",
      lg: "xlarge",
    },
  },
  medium: {
    paddingX: {
      xs: "medium",
      sm: "xxlarge",
    },
    paddingY: {
      xs: "large",
      sm: "xxlarge",
    },
  },
  large: {
    paddingX: {
      xs: "medium",
      sm: "xxlarge",
      md: "xxxlarge",
    },
    paddingY: {
      xs: "large",
      sm: "xxlarge",
      md: "xxxlarge",
    },
  },
};

export const Card = ({
  "data-id": dataId,
  padding = defaultCardProps.padding,
  children,
  backgroundColor = defaultCardProps.backgroundColor,
}: CardProps) => (
  <Box
    width="full"
    backgroundColor={backgroundColor}
    data-id={dataId}
    {...cardPaddingForVariant[padding]}
  >
    {children}
  </Box>
);

Card.defaultProps = defaultCardProps;
Card.displayName = "Card";
