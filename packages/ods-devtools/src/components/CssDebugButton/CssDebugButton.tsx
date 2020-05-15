import React, { ButtonHTMLAttributes } from "react";

import { useDebugState, useDebugDispatch } from "../../context/debug-context";

export interface CSSDebugButtonProps {
  Button: React.ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
  Icon: React.ReactNode;
}

export const CSSDebugButton = ({ Button, ...rest }: CSSDebugButtonProps) => {
  const { showCSSBorders } = useDebugState();
  const dispatch = useDebugDispatch();
  function handleShowCssBordersClick() {
    dispatch({ type: "showCSSBorders", value: !showCSSBorders });
  }
  return (
    <Button onClick={handleShowCssBordersClick} {...rest}>
      {showCSSBorders ? "Hide" : "Show"} CSS borders
    </Button>
  );
};
