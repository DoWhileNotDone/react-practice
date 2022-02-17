import React, { createContext, useContext } from 'react';
import { Child } from './Child';
import { Parent } from './Parent';
import {
  thing as thingType,
  thingsContext as thingsContextType,
} from './typeDefs';

const ThingsContext = createContext<thingsContextType|undefined>({
    things: [], // set a default value
    toggleContext: () => { console.log(1234) },
} as thingsContextType|undefined)

const useThingsContext = () => {
  const context = useContext(ThingsContext)
  if (context === undefined) {
    throw new Error('useThingsContext must be used within a ThingsProvider')
  }
  return context
};

const ThingsProvider = ThingsContext.Provider;

const App = () => {

  const things: Array<thingType> = [
    {id: 1, name: 'thing 1', length: 5},
    {id: 2, name: 'thing 2', length: 2},
    {id: 3, name: 'thing 3', length: 6},
    {id: 4, name: 'thing 4', length: 10},
    {id: 5, name: 'thing 5', length: 1}
  ];

  return (
    <ThingsProvider value={{...useThingsContext(), things}}>
      <Parent>
          {[1,2,3].map(index => {
            return <Child key={index} index={index}></Child>
          })}
      </Parent>
    </ThingsProvider>
  );
};

export {
  App,
  useThingsContext
};
