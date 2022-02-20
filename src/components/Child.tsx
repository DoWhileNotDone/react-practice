import React from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { useThingsContext } from 'providers';
import type { ThingInterface, ChildComponentProps} from 'definitions';

const Child = ({ id }: ChildComponentProps) => {
  const { state: { things }} = useThingsContext();
  const thing: ThingInterface|undefined = things.find((thing: ThingInterface) => thing.id === id);
  return (
    <ListItem alignItems="flex-start">
      <ListItemIcon>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
            { `Child Thing - ${thing?.name ?? 'not found'}` } 
            </Typography>
          </React.Fragment>          
        }
        secondary={null} 
      />          
      </ListItem>
  );
};

export { Child };
