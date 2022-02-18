import { createContext, useContext } from 'react';

import type {
  thingsContext as thingsContextType,
} from 'src/types';

const ThingsContext = createContext<thingsContextType|undefined>({
    things: [], // set a default value
    toggleContext: () => { console.log(1234) },
} as thingsContextType|undefined)

const useThingsContext = () => {
  const context = useContext(ThingsContext)
  if (context === undefined) {
    throw new Error('useThingsContext must be used within a ThingsProvider')
  }
  return context;
};

const ThingsProvider = ThingsContext.Provider;

export {
    ThingsProvider,
    useThingsContext,
};
