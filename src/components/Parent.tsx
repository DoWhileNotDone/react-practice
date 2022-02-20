import React from 'react';
import { Child } from './Child';
import type { ThingInterface } from 'definitions';
import { useThingsContext } from 'providers';

const Parent = () => {
  const { state: { things }} = useThingsContext();
  //Deliberately not passing the full thing 
  // so it can be retrieved from context in child
  return (
      <div>
          {things.map((thing: ThingInterface) => {
            return <Child key={thing.id} id={thing.id}></Child>
          })}
      </div>
  );
};

export { Parent };