import React from 'react';

export interface GlobalState {
  showCSSBorders: boolean;
}

const GlobalStateContext = React.createContext<GlobalState>({
  showCSSBorders: false,
});
const GlobalDispatchContext = React.createContext<
  React.Dispatch<GlobalAction> | undefined
>(undefined);

export interface GlobalAction {
  type: 'showCSSBorders';
  value: boolean;
}

function globalReducer(
  globalState: GlobalState,
  action: GlobalAction,
): GlobalState {
  switch (action.type) {
    case 'showCSSBorders': {
      return {...globalState, showCSSBorders: action.value};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GlobalProvider({children}: React.Props<any>) {
  const [state, dispatch] = React.useReducer(globalReducer, {
    showCSSBorders: false,
  });
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

function showCSSBorders(
  dispatch: React.Dispatch<GlobalAction>,
  value: boolean,
) {
  dispatch({type: 'showCSSBorders', value});
}

function useGlobalDispatch() {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error(`useGlobalDispatch must be used within a GlobalProvider`);
  }
  return context;
}

function useGlobalState() {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error(`useGlobalState must be used within a GlobalProvider`);
  }
  return context;
}

export {GlobalProvider, useGlobalDispatch, useGlobalState, showCSSBorders};
