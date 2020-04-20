import React, { ReactNode, useMemo } from "react";
import { BoxProps, Box } from "@origin-digital/ods-core";
import {
  TextVariants,
  TextToneVariants,
  TypographyWeightVariants,
} from "@origin-digital/ods-types";
import {
  useTextStyles,
  useTruncatedContent,
} from "../_private/hooks/typography";
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

const defaultWeight = "regular";
const defaultVariant = "body";

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

  const content = useTruncatedContent({ children, truncate, display: "span" });

  return (
    <TextContext.Provider value={textContextValue}>
      <Box
        data-id={dataId}
        className={className}
        component={component}
        textAlign={align}
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
