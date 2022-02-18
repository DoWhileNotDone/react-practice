import React, { createContext, useContext } from 'react';
import { state } from './initialstate';
import type {
  thingsState,
} from 'types';

const ThingsContext: React.Context<thingsState> = createContext<thingsState>(state as thingsState)
ThingsContext.displayName = 'Thing Store';

const useThingsContext = (): thingsState => {
  const context: thingsState | undefined = useContext(ThingsContext)
  if (context === undefined) {
    throw new Error('useThingsContext must be used within a ThingsProvider')
  }
  return context;
};

const ThingsProvider: React.Provider<thingsState> =  ThingsContext.Provider;
  
export {
    ThingsProvider,
    useThingsContext,
};


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