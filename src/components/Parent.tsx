import React from 'react';
import type { ComponentPropsInterface } from 'definitions'

const Parent = ({ children }: ComponentPropsInterface ) => {
  return (
      <div>
         { children }
      </div>
  );
};

export { Parent };