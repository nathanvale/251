import React, { createContext, useContext, ReactElement } from "react";
import { BackgroundColorVariants } from "@origin-digital/ods-types";

const backgroundContext = createContext<BackgroundColorVariants | null>(null);

export const BackgroundProvider = backgroundContext.Provider;

export const renderBackgroundProvider = (
  element: ReactElement | null,
  backgroundColor?: BackgroundColorVariants
) =>
  backgroundColor ? (
    <BackgroundProvider value={backgroundColor}>{element}</BackgroundProvider>
  ) : (
    element
  );

export const useBackgroundColor = () => useContext(backgroundContext);
