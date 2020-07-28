import * as React from "react";

import {
  TextToneVariants,
  TextVariants,
  TypographyWeightVariants,
} from "@origin-digital/ods-types";

export const TEXT_CONTEXT_DEFAULTS = {
  weight: "regular",
  variant: "body",
} as const;

export interface UseTextProps {
  variant: TextVariants;
  weight: Exclude<TypographyWeightVariants, "bold">;
  tone?: TextToneVariants;
}

export const TextContext = React.createContext<UseTextProps | false>(false);

export function mergeToContext(
  curContext: UseTextProps | false,
  props: Partial<UseTextProps>,
  defaults: UseTextProps
) {
  let mergedContext;
  if (curContext) {
    mergedContext = {
      tone: props.tone ?? (curContext && curContext.tone) ?? defaults?.tone,
      variant:
        props.variant ?? (curContext && curContext.variant) ?? defaults.variant,
      weight:
        props.weight ?? (curContext && curContext.weight) ?? defaults.weight,
    };
  } else {
    mergedContext = {
      tone: props.tone ?? defaults?.tone,
      variant: props.variant ?? defaults.variant,
      weight: props.weight ?? defaults.weight,
    };
  }

  return mergedContext;
}

export interface TextContextProviderProps extends Partial<UseTextProps> {
  children?: React.ReactNode;
  defaults?: UseTextProps;
}

export function TextContextProvider({
  variant,
  weight,
  tone,
  children,
  defaults = TEXT_CONTEXT_DEFAULTS,
}: TextContextProviderProps) {
  const curContext = React.useContext(TextContext);

  const textContextValue = React.useMemo(() => {
    return mergeToContext(
      curContext,
      {
        tone,
        variant,
        weight,
      },
      defaults
    );
  }, [curContext, defaults, tone, variant, weight]);

  return (
    <TextContext.Provider value={textContextValue}>
      {children}
    </TextContext.Provider>
  );
}
