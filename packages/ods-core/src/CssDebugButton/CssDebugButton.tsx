import React from 'react';

import {
  useGlobalState,
  useGlobalDispatch,
} from '../_private/context/global-context';

export interface CSSDebugButtonProps {
  Button: TS_FIXME;
  Icon: TS_FIXME;
}

export const CSSDebugButton = ({Button, ...rest}: CSSDebugButtonProps) => {
  const {showCSSBorders} = useGlobalState();
  const dispatch = useGlobalDispatch();
  function handleShowCssBordersClick() {
    dispatch({type: 'showCSSBorders', value: !showCSSBorders});
  }
  return (
    <Button onClick={handleShowCssBordersClick} {...rest}>
      {showCSSBorders ? 'Hide' : 'Show'} CSS borders
    </Button>
  );
};
