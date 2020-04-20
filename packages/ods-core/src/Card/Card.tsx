import React, { ReactNode } from "react";
import {
  BreakpointVariants,
  SpaceVariants,
  Colors,
  CardPaddingVariants,
} from "@origin-digital/ods-types";
import { Box } from "../Box/Box";

export interface CardProps {
  padding?: CardPaddingVariants;
  "data-id"?: string;
  children?: ReactNode;
  backgroundColor?: keyof Pick<Colors, "transparent" | "grey50" | "white">;
}

type PaddingValues = Partial<Record<BreakpointVariants, SpaceVariants>>;

const cardPaddingForVariant: Record<
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
  padding = "small",
  children,
  backgroundColor = "white",
}: CardProps) => (
  <Box
    backgroundColor={backgroundColor}
    data-id={dataId}
    {...cardPaddingForVariant[padding]}
  >
    {children}
  </Box>
);

Card.displayName = "Card";

Card.defaultProps = {
  "data-id": "card",
  padding: "small",
  backgroundColor: "white",
};
