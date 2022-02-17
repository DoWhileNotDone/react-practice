import React from 'react';
import { useThingsContext } from './App';
import { thing as thingType} from './typeDefs';
type ChildProps = {
  /** Iteration Key */
 key: number;
 /** Iteration Index */
 index: number;
}  

const Child = ({ index }: ChildProps) => {

  const context = useThingsContext();
  const thing: thingType|undefined = context.things.find(thing => thing.id === index);
  return (
      <div>
          { `Child - ${thing?.name ?? 'not found'}` } 
      </div>
  );
};

export { Child };
