import React, { ReactNode } from "react";
import { BoxProps, Box } from "@origin-digital/ods-core";
import {
  HeadingComponentVariants,
  TypographyWeightVariants,
  Heading12Variants,
  Heading34Variants,
} from "@origin-digital/ods-types";
import {
  useHeadingStyles,
  useTruncatedContent,
} from "../_private/hooks/typography";
import { Text } from "../Text/Text";
import { HeadingContext } from "./HeadingContext";

export interface HeadingBaseProps {
  children: ReactNode;
  align?: BoxProps["textAlign"];
  truncate?: boolean;
  "data-id"?: string;
  component?: HeadingComponentVariants;
  /**
   * Heading font weights can only be applied to h1 and h2 variants.
   * Otherwise a typescript error error will be displayed.
   */
  weight?: Exclude<TypographyWeightVariants, "bold">;
}

type Heading12Props = Omit<HeadingBaseProps, "variant"> & {
  variant: Heading12Variants;
};

type Heading34Props = Omit<HeadingBaseProps, "variant" | "weight"> & {
  variant: Heading34Variants;
};

export type HeadingProps = Heading12Props | Heading34Props;

export const Heading = (props: HeadingProps) => {
  const {
    children,
    component,
    truncate = false,
    align,
    "data-id": dataId,
    variant,
  } = props;

  let weight: HeadingBaseProps["weight"];
  if (props.variant === "h2" || props.variant === "h1") {
    weight = props.weight || "regular";
  } else {
    // @ts-ignore (ignoring in this case so we can throw a runtime error)
    if (props.weight)
      throw new Error(
        "Heading font weights can only be applied to h1 and h2 variants."
      );
    weight = "medium";
  }
  const headingStyles = useHeadingStyles({ variant, weight });
  const content = useTruncatedContent({ children, truncate, display: "block" });

  if (
    variant !== "h1" &&
    variant !== "h2" &&
    variant !== "h3" &&
    variant !== "h4"
  )
    return (
      <Text tone="critical">
        Please choose a heading variant! ( "h1" | "h2" | "h3" | "h4")
      </Text>
    );

  return (
    <HeadingContext.Provider value={true}>
      <Box
        data-id={dataId}
        className={headingStyles}
        component={component || variant}
        textAlign={align}
      >
        {content}
      </Box>
    </HeadingContext.Provider>
  );
};

Heading.defaultProps = {
  "data-id": "heading",
  truncate: false,
  align: "left",
};

Heading.displayName = "Heading";
