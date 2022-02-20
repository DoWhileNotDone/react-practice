import React from 'react';
import { Button, List } from '@mui/material';
import { Child } from './Child';
import type { ThingInterface } from 'definitions';
import { useThingsContext } from 'providers';

const Parent = () => {
  const { state: { things }} = useThingsContext();
  //Deliberately not passing the full thing 
  // so it can be retrieved from context in child
  return (
      <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {things.map((thing: ThingInterface) => {
              return <Child key={thing.id} id={thing.id}></Child>
            })}
        </List>
        <Button variant="contained">123</Button>
      </>
  );
};

export { Parent };