import React from 'react';
import { Child } from './Child';
import { Parent } from './Parent';
import { 
  ThingsProvider,
  useThingsContext 
} from 'providers';

import { things } from 'data';

const App = () => {

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
  App
};
