import React from 'react';
import { Grid, TextField, Button, Icon } from '@material-ui/core';

function TextMode() {
  return (
    <div>
      <Grid container direction="column" item xs={12} spacing={4}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="fileName"
            multiline
            rows={12}
            defaultValue="textFile"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" startIcon={<Icon>save</Icon>}>
            Сохранить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default TextMode;
