import React from 'react';
import { useThingsContext } from 'providers';
import type { thing as thingType, ChildProps} from 'types';

const Child = ({ index }: ChildProps) => {

  const context = useThingsContext();
  const thing: thingType|undefined = context.things.find((thing: thingType) => thing.id === index);
  return (
      <div>
          { `Child - ${thing?.name ?? 'not found'}` } 
      </div>
  );
};

export { Child };
