import React from 'react';
import { Parent } from './Parent';
import { ThingsProvider } from 'providers';
 
const App = () => {
  return (
    <ThingsProvider >
      <Parent/>
    </ThingsProvider>
  );
};

export {
  App
};
