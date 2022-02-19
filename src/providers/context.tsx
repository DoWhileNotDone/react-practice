import React, { createContext, useContext, useReducer } from 'react';
import { useActions } from './actions';
import { state as initialstate } from './initialstate';
import { appReducer } from './reducer';
import type {
  thing,
  thingsState,
} from 'types';


type actionType = {
  addAction: (payload: thing) => void,
}

interface AppContextInterface {
  state: thingsState;
  actions: actionType
}

interface Props {
  children: React.ReactNode,
  // any props that come into the component
}

//TODO: Add things to context
//import { things } from 'data';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThingsContext = createContext<AppContextInterface | null>(null);

ThingsContext.displayName = 'Thing Store';

const ThingsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialstate);

  const actions = useActions(state, dispatch);

  //Todo: handle actions

  return (
    <ThingsContext.Provider
        value={{
            state,
            actions,
        }}
    >
        {children}
    </ThingsContext.Provider>
  );
}

const useThingsContext = (): AppContextInterface => {
  const context: AppContextInterface | null = useContext(ThingsContext)
  if (context === null) {
    throw new Error('useThingsContext must be used within a ThingsProvider')
  }
  return context;
};

export {
    ThingsProvider,
    useThingsContext,
};

//const ThingsProvider: React.Provider<thingsState> =  ThingsContext.Provider;
 
//import React from 'react';

// export const StoreProvider = ( children: ChildrenProps, initialState: thingsState, reducer:appReducer ) => {
//   const [globalState, dispatch] = React.useReducer(reducer, initialState);

//   return (
//     <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
//   );
// };

// const Store = createContext({});
// Store.displayName = 'Store';

// export const useStore = () => React.useContext(Store);

//const ThingsProvider = (value: thingsState, children: ChildrenProps) => {
//   return <ThingsContext.Provider value={value}>{children}</ThingsContext.Provider>
// }


// const ThingsProvider = ( children: ChildrenProps ): JSX.Element => {
//   const [globalState, dispatch] = React.useReducer() ;

//   return (
//     <ThingsContext.Provider value={[globalState, dispatch]}>{children}</ThingsContext.Provider>
//   );
// };


//import { useReducer } from 'react';
// export const useThingReducer = () => {
//     const [state, dispatch] = useReducer(appReducer, initialState);
//     return [state, dispatch];
// };
