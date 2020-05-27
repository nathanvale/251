/**
 * It's often useful to define a custom render method that includes things like
 * global context providers, data stores, etc. To make this available globally,
 * one approach is to define a utility file that re-exports everything from
 * React Testing Library. You can replace React Testing Library with this file
 * in all your imports.
 * https://testing-library.com/docs/native-testing-library/setup#custom-render
 */
import React, { ReactNode } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { OriginThemeProvider } from "@origin-digital/ods-core";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <OriginThemeProvider>{children}</OriginThemeProvider>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = ((ui: any, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })) as typeof render;

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
