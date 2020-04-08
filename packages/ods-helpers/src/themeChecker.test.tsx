import React from "react";
import { render } from "@testing-library/react";
import { OriginThemeProvider } from "@origin-digital/ods-themes";
import styled from "styled-components";
import { themeChecker, errorMessage } from "./themeChecker";

test("It throws an error when a component is NOT wrapped in an <OriginThemeProvider/>", () => {
  const Test = styled.div`
    ${themeChecker}
  `;
  const t = () => {
    render(<Test />);
  };
  expect(t).toThrow(new Error(errorMessage));
});

test("It does not throw error when a component is wrapped in an <OriginThemeProvider/>", () => {
  const Test = styled.div`
    ${themeChecker}
  `;
  const t = () => {
    render(
      <OriginThemeProvider>
        <Test />
      </OriginThemeProvider>
    );
  };
  expect(t).not.toThrowError();
});
