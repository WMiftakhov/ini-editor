import React from 'react';
import { ButtonGroup, Button, Icon, Grid, Typography } from '@material-ui/core';

function SwitchMode(props) {
  return (
    <Grid container justify="space-between" spacing={4} wrap="nowrap">
      <Grid item>
        <Typography variant="h6">Редактирование файла</Typography>
      </Grid>
      <Grid item>
        <ButtonGroup
          size="small"
          disableElevation
          variant="contained"
          color="primary"
          // style={{ position: 'absolute', right: 0, top: '1rem' }}
        >
          <Button onClick={() => props.changeMode(1)}>
            <Icon>view_headline</Icon>
          </Button>
          <Button onClick={() => props.changeMode(0)}>
            <Icon>image</Icon>
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default SwitchMode;
