import React from 'react';
import { Grid, Typography, TextField, Button, Icon } from '@material-ui/core';
import fileFish from './constant/fileFish';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleSection: {
    marginBottom: '1rem',
    marginTop: '1rem',
    marginLeft: '.5rem',
  },
  textField: {
    padding: '1rem .5rem',
  },
}));

function GraphicsMode() {
  const classes = useStyles();
  return (
    <Grid container direction="column" item xs={12}>
      {fileFish.map(({ nameSection, property }) => {
        return (
          <Grid container direction="column" item key={uuidv4()}>
            <Grid item>
              <Typography className={classes.titleSection} variant="h6">
                {nameSection}
              </Typography>
            </Grid>
            {property.map(({ rule, value }) => {
              return (
                <Grid item xs={10} className={classes.textField} key={uuidv4()}>
                  <TextField
                    fullWidth
                    size="small"
                    type={typeof value === 'number' ? 'number' : 'text'}
                    name={rule}
                    label={rule}
                    variant="outlined"
                    value={value}
                  />
                </Grid>
              );
            })}
          </Grid>
        );
      })}
      <Grid item xs={10} container justify="space-between">
        <Grid item xs={10}>
          <Typography className={classes.titleSection} variant="h6">
            Новое правило
          </Typography>
        </Grid>
        <Grid className={classes.textField} item xs={6}>
          <TextField
            fullWidth
            size="small"
            type="text"
            name="newRules"
            label="Название"
            variant="outlined"
            value="newRules"
          />
        </Grid>
        <Grid className={classes.textField} item xs={6}>
          <TextField
            fullWidth
            size="small"
            type="text"
            name="newValue"
            label="Значение"
            variant="outlined"
            value="newValue"
          />
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" startIcon={<Icon>add</Icon>}>
          Добавить новую секцию
        </Button>
      </Grid>
    </Grid>
  );
}

export default GraphicsMode;
