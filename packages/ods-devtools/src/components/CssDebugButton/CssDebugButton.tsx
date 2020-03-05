import React from "react";

import { useDebugState, useDebugDispatch } from "../../context/debug-context";

export interface CSSDebugButtonProps {
  Button: TS_FIXME;
  Icon: TS_FIXME;
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
