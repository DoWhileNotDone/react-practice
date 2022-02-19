import React from 'react';
import { Child } from './Child';
import { Parent } from './Parent';
import { 
  ThingsProvider,
} from 'providers';


const App = () => {

  return (
    <ThingsProvider >
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
