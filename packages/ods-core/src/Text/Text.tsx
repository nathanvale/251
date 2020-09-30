import React from "react";
import styled from "styled-components";
import clsx from "clsx";
import {
  TextVariants,
  TextToneVariants,
  TypographyWeightVariants,
  ComponentBaseProps,
} from "@origin-digital/ods-types";
import { BoxProps, Box } from "../Box";
import { useTruncatedContent } from "../_private/hooks";

import { TextContextProvider, UseTextProps } from "./TextContextProvider";

import { useTextStylesFromContext } from "./useTextStyles";

export interface TextProps extends ComponentBaseProps {
  variant?: TextVariants;
  tone?: TextToneVariants;
  weight?: Exclude<TypographyWeightVariants, "bold">;
  align?: BoxProps["textAlign"];
  truncate?: boolean;
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
    className: classNameProp,
    component = defaultProps.component,
    truncate = defaultProps.truncate,
    ...rest
  } = props;

  const { className } = useTextStylesFromContext();

  const content = useTruncatedContent({
    children,
    truncate,
  });

  return (
    <Container
      className={clsx(className, classNameProp)}
      component={component}
      textAlign={align}
      {...rest}
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
