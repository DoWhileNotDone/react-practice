import React from 'react';
import { useThingsContext } from 'providers';
import type { ThingInterface, ChildComponentProps} from 'definitions';

const Child = ({ index }: ChildComponentProps) => {

  const { state: { things }} = useThingsContext();
  const thing: ThingInterface|undefined = things.find((thing: ThingInterface) => thing.id === index);
  return (
      <div>
          { `Child - ${thing?.name ?? 'not found'}` } 
      </div>
  );
};

export { Child };
