import * as React from "react";
import clsx from "clsx";

import {
  useBasekickStyles,
  useStrongStyles,
  useToneStyles,
  useWeightStyles,
} from "@origin-digital/ods-typography";

import { useCheckTypographyBackground } from "../_private/hooks";
import { TextContext, UseTextProps } from "./TextContextProvider";

export function useTextStyles(props: UseTextProps) {
  const { tone = "neutral", weight, variant } = props;
  useCheckTypographyBackground();
  const basekickStyles = useBasekickStyles({ variant });
  const toneStyles = useToneStyles({ tone });
  const weightStyles = useWeightStyles(weight);
  const strongStyles = useStrongStyles("medium");
  return clsx(basekickStyles, toneStyles, weightStyles, strongStyles);
}

export function useTextStylesFromContext() {
  const textContext = React.useContext(TextContext);

  if (!textContext) {
    throw Error(
      [
        "The context is required for tone, variant and weight values. ",
        "You can only use this hook inside children of TextContextProvider. Make sure you component is wrapped in",
        "a TextContextProvider or one of 'Text' or 'List' components (which contain a TextContextProvider).",
      ].join(" ")
    );
  }

  const className = useTextStyles(textContext);

  return {
    className,
    ...textContext,
  };
}
