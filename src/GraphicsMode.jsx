import React from "react";
import { Grid, Typography, TextField, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GraphicsModeSection from "./GraphicsModeSection";

const useStyles = makeStyles(() => ({
  textField: {
    padding: "1rem .5rem",
  },
}));

function GraphicsMode(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" item xs={12}>
      <GraphicsModeSection file={props.file} />
      <Grid item xs={12} container justify="space-between">
        <Grid item xs={12}>
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
      <Grid container justify="flex-end" item style={{ margin: "1rem 0" }}>
        <Grid item>
          <Button
            size="small"
            variant="contained"
            style={{ marginRight: "1rem" }}
            color="primary"
            startIcon={<Icon>add</Icon>}
          >
            Добавить новую секцию
          </Button>
        </Grid>

        <Grid item>
          <Button
            size="small"
            variant="contained"
            color="primary"
            startIcon={<Icon>save</Icon>}
          >
            Сохранить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GraphicsMode;
