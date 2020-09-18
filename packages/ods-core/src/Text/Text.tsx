import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  TextVariants,
  TextToneVariants,
  TypographyWeightVariants,
} from "@origin-digital/ods-types";
import { BoxProps, Box } from "../Box";
import { useTruncatedContent } from "../_private/hooks";

import { TextContextProvider, UseTextProps } from "./TextContextProvider";

import { useTextStylesFromContext } from "./useTextStyles";

export interface TextProps {
  children?: ReactNode;
  variant?: TextVariants;
  tone?: TextToneVariants;
  weight?: Exclude<TypographyWeightVariants, "bold">;
  align?: BoxProps["textAlign"];
  truncate?: boolean;
  "data-id"?: string;
  component?: BoxProps["component"];
  inline?: boolean;
}

const defaultProps = {
  "data-id": "text",
  component: "span",
  align: "left",
  truncate: false,
} as Partial<TextProps>;

const Container = styled<BoxProps>(Box)`
  max-width: 100%;
`;

type TextInnerProps = Omit<TextProps, keyof UseTextProps>;

export const TextInner = (props: TextInnerProps) => {
  const {
    align,
    children,
    component = defaultProps.component,
    "data-id": dataId,
    truncate = defaultProps.truncate,
  } = props;

  const { className } = useTextStylesFromContext();

  const content = useTruncatedContent({
    children,
    truncate,
  });

  return (
    <Container
      data-id={dataId}
      className={className}
      component={component}
      textAlign={align}
    >
      {content}
    </Container>
  );
};

export const Text = ({
  tone,
  variant,
  weight,
  inline,
  ...others
}: TextProps) => {
  return (
    <TextContextProvider
      tone={tone}
      variant={variant}
      weight={weight}
      inline={inline}
    >
      <TextInner {...others} />
    </TextContextProvider>
  );
};

Text.defaultProps = defaultProps;

Text.displayName = "Text";
