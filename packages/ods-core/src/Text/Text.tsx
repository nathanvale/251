import React, { ReactNode, useMemo } from "react";
import clsx from "clsx";
import { BoxProps, Box } from "@origin-digital/ods-core";
import {
  TextVariants,
  TextToneVariants,
  TypographyWeightVariants,
} from "@origin-digital/ods-types";
import {
  useBasekickStyles,
  useToneStyles,
  useWeightStyles,
  useStrongStyles,
} from "@origin-digital/ods-typography";
import {
  useCheckTypographyBackground,
  useTruncatedContent,
} from "../_private/hooks";

import { TextContext } from "./TextContext";

export interface UseTextProps {
  mediumWeight?: boolean;
  variant?: TextVariants;
  tone?: TextToneVariants;
}

export interface TextProps {
  children?: ReactNode;
  variant?: TextVariants;
  tone?: TextToneVariants;
  weight?: Exclude<TypographyWeightVariants, "bold">;
  align?: BoxProps["textAlign"];
  truncate?: boolean;
  "data-id"?: string;
  component?: BoxProps["component"];
}

interface UseTextStylesProps {
  weight: Exclude<TypographyWeightVariants, "bold">;
  tone?: TextToneVariants;
  variant: TextVariants;
}

const defaultWeight = "regular";
const defaultVariant = "body";

function useTextStyles(props: UseTextStylesProps) {
  const { tone = "neutral", weight, variant } = props;
  useCheckTypographyBackground();
  const basekickStyles = useBasekickStyles({ variant });
  const toneStyles = useToneStyles({ tone });
  const weightStyles = useWeightStyles(weight);
  const strongStyles = useStrongStyles("medium");
  return clsx(basekickStyles, toneStyles, weightStyles, strongStyles);
}

export const Text = (props: TextProps) => {
  const {
    children,
    component = "span",
    variant = defaultVariant,
    truncate = false,
    align,
    weight = defaultWeight,
    tone,
    "data-id": dataId,
  } = props;

  // Prevent re-renders when context values haven't changed
  const textContextValue = useMemo(
    () => ({
      tone,
      weight,
      variant,
    }),
    [tone, weight, variant]
  );

  const className = useTextStyles({ weight, tone, variant });

  const content = useTruncatedContent({
    children,
    truncate,
  });

  return (
    <TextContext.Provider value={textContextValue}>
      <Box
        data-id={dataId}
        className={className}
        component={component}
        textAlign={align}
        maxWidth="100%"
      >
        {content}
      </Box>
    </TextContext.Provider>
  );
};

Text.defaultProps = {
  "data-id": "text",
  component: "span",
  variant: defaultVariant,
  tone: "neutral",
  weight: defaultWeight,
  align: "left",
  truncate: false,
};

Text.displayName = "Text";
