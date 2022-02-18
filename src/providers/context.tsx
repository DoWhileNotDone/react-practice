import { createContext, useContext } from 'react';
import { state } from './initialstate'
import type {
  thingsContext as thingsContextType,
} from 'types';

const ThingsContext: React.Context<thingsContextType|undefined> = createContext<thingsContextType|undefined>(state as thingsContextType|undefined)

const useThingsContext = (): thingsContextType => {
  const context: thingsContextType | undefined = useContext(ThingsContext)
  if (context === undefined) {
    throw new Error('useThingsContext must be used within a ThingsProvider')
  }
  return context;
};

const ThingsProvider: React.Provider<thingsContextType|undefined> = ThingsContext.Provider;

export {
    ThingsProvider,
    useThingsContext,
};