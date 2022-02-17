import React from 'react';

type ParentProps = {
   /** Parent Component Props Children */
  children: React.ReactNode;
}  

const Parent = ({ children }: ParentProps ) => {
  return (
      <div>
         { children }
      </div>
  );
};

export { Parent };