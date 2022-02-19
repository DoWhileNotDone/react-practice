import React from 'react';
import { useThingsContext } from 'providers';
import type { thing as thingType, ChildProps} from 'types';

const Child = ({ index }: ChildProps) => {

  const { state: { things }} = useThingsContext();
  const thing: thingType|undefined = things.find((thing: thingType) => thing.id === index);
  return (
      <div>
          { `Child - ${thing?.name ?? 'not found'}` } 
      </div>
  );
};

export { Child };
