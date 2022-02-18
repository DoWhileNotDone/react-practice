import React from 'react';
import type { ParentProps } from 'types'

const Parent = ({ children }: ParentProps ) => {
  return (
      <div>
         { children }
      </div>
  );
};

export { Parent };