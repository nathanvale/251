import React from 'react';

export interface DebugState {
  showCSSBorders: boolean;
}

const DebugStateContext = React.createContext<DebugState>({
  showCSSBorders: false,
});
const DebugDispatchContext = React.createContext<
  React.Dispatch<DebugAction> | undefined
>(undefined);

export interface DebugAction {
  type: 'showCSSBorders';
  value: boolean;
}

function debugReducer(debugState: DebugState, action: DebugAction): DebugState {
  switch (action.type) {
    case 'showCSSBorders': {
      return {...debugState, showCSSBorders: action.value};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DebugProvider({children}: React.Props<any>) {
  const [state, dispatch] = React.useReducer(debugReducer, {
    showCSSBorders: false,
  });
  return (
    <DebugStateContext.Provider value={state}>
      <DebugDispatchContext.Provider value={dispatch}>
        {children}
      </DebugDispatchContext.Provider>
    </DebugStateContext.Provider>
  );
}

function showCSSBorders(dispatch: React.Dispatch<DebugAction>, value: boolean) {
  dispatch({type: 'showCSSBorders', value});
}

function useDebugDispatch() {
  const context = React.useContext(DebugDispatchContext);
  if (context === undefined) {
    throw new Error(`useDebugDispatch must be used within a DebugProvider`);
  }
  return context;
}

function useDebugState() {
  const context = React.useContext(DebugStateContext);
  if (context === undefined) {
    throw new Error(`useDebugState must be used within a DebugProvider`);
  }
  return context;
}

export {DebugProvider, useDebugDispatch, useDebugState, showCSSBorders};
