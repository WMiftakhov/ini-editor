import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Grid,
  Typography,
  Icon,
} from '@material-ui/core/';
import { v4 as uuidv4 } from 'uuid';

function FilesList() {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Список файлов</Typography>
      <List>
        {[1, 2, 3].map(() => {
          return (
            <ListItem key={uuidv4()} button>
              <ListItemIcon>
                <Icon>description</Icon>
              </ListItemIcon>
              <ListItemText primary="Text" secondary={'Изменено: ...'} />
              <ListItemSecondaryAction>
                <Icon color="secondary" aria-label="delete">
                  delete
                </Icon>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}

export default FilesList;
