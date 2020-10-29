import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  titleSection: {
    marginBottom: "1rem",
    marginTop: "1rem",
    marginLeft: ".5rem",
  },
  textField: {
    padding: "1rem .5rem",
  },
}));

function GraphicsModeSection(props) {
  const [newContent, setNewContent] = useState(props.file.content || []);
  const [test, setTest] = useState("");

  const classes = useStyles();

  const handlerChangeProperty = (e, sectionId) => {
    const { name, value } = e.target;
    setNewContent([
      ...newContent.map((section) => {
        if (section.sectionId === sectionId) {
          return { ...section, rules: { ...section.rules, [name]: value } };
        } else {
          return section;
        }
      }),
    ]);
  };

  return (
    <>
      {newContent.map(({ sectionId, nameSection, rules }) => {
        return (
          <Grid key={uuidv4()} container direction="column" item>
            <Grid item>
              <Typography className={classes.titleSection} variant="h6">
                {nameSection}
              </Typography>
            </Grid>
            {rules &&
              Object.keys(rules).map((property) => {
                return (
                  <Grid
                    item
                    xs={12}
                    className={classes.textField}
                    key={uuidv4()}
                  >
                    <TextField
                      fullWidth
                      size="small"
                      type={
                        typeof rules[property] === "number" ? "number" : "text"
                      }
                      name={property}
                      label={property}
                      variant="outlined"
                      value={rules[property]}
                      onChange={(e) => handlerChangeProperty(e, sectionId)}
                    />
                  </Grid>
                );
              })}
          </Grid>
        );
      })}
    </>
  );
}

export default GraphicsModeSection;
