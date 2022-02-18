import React from 'react';
import type { ChildrenProps } from 'types'

const Parent = ({ children }: ChildrenProps ) => {
  return (
      <div>
         { children }
      </div>
  );
};

export { Parent };