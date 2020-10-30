import React from 'react';
import { ButtonGroup, Button, Icon, Grid, Typography, Tooltip, Fade } from '@material-ui/core';

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
          <Tooltip
            title="Текстовый режим"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}>
            <Button onClick={() => props.changeMode(1)}>
              <Icon>view_headline</Icon>
            </Button>
          </Tooltip>
          <Tooltip
            title="Графический режим"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}>
            <Button onClick={() => props.changeMode(0)}>
              <Icon>image</Icon>
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default SwitchMode;
