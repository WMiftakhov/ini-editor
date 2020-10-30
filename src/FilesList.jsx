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
import EditFileName from './EditFileName';

function FilesList(props) {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Список файлов</Typography>
      <List>
        {!!props.files && !!props.files.length
          ? props.files.map(({ id, fileName, created, changed, edit, content }) => {
              if (edit) {
                return (
                  <EditFileName
                    key={uuidv4()}
                    id={id}
                    fileName={fileName}
                    onChangeNameFile={props.onChangeNameFile}
                  />
                );
              }
              return (
                <ListItem key={uuidv4()} onClick={() => props.handlerSelectedFile(id)} button>
                  <ListItemIcon>
                    <Icon style={{ margin: '0 auto' }}>description</Icon>
                  </ListItemIcon>
                  <ListItemText
                    style={{ whiteSpace: 'pre-line' }}
                    primary={`${fileName}.ini`}
                    secondary={changed ? `Изменено:\n${changed}` : `Создано:\n${created}`}
                  />
                  <ListItemSecondaryAction style={{ cursor: 'pointer' }}>
                    <Icon
                      onClick={() => props.deleteFile(id)}
                      color="secondary"
                      aria-label="delete">
                      delete
                    </Icon>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })
          : ''}

        {!props.files.filter((file) => file.edit).length ? (
          <>
            {' '}
            <ListItem button onClick={props.handlerCreateFile}>
              <ListItemIcon>
                <Icon style={{ margin: '0 auto' }} color="primary">
                  add_circle
                </Icon>
              </ListItemIcon>
              <ListItemText primary="Создать файл" />
            </ListItem>
          </>
        ) : (
          ''
        )}
      </List>
    </Grid>
  );
}

export default FilesList;
