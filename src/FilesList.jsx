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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconCenter: {
    margin: '0 auto',
  },
  deleteIcon: {
    cursor: 'pointer',
    '& span': {
      color: 'grey',
      transition: 'all .5s',
    },
    '&:hover span': {
      color: theme.palette.secondary.main,
    },
  },
}));

function FilesList(props) {
  const classes = useStyles();

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
                    <Icon className={classes.iconCenter}>description</Icon>
                  </ListItemIcon>
                  <ListItemText
                    style={{ whiteSpace: 'pre-line' }}
                    primary={`${fileName}.ini`}
                    secondary={changed ? `Изменено:\n${changed}` : `Создано:\n${created}`}
                  />
                  <ListItemSecondaryAction className={classes.deleteIcon}>
                    <Icon
                      className={`${classes.iconCenter}`}
                      onClick={() => props.deleteFile(id)}
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
            <ListItem button onClick={props.handlerCreateFile}>
              <ListItemIcon>
                <Icon color="primary" className={classes.iconCenter}>
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
