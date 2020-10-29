import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Divider,
  Icon,
  Box,
} from "@material-ui/core";
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
  linePlusRule: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "1.5rem",
  },
  boxAddRules: {
    position: "absolute",
    right: "0",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "0.1rem 1rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "0.25rem",
    transition: '.5s',
    '&:hover': {
      borderColor: "rgba(245, 0, 87, .5)"
    }
  }
}));

function GraphicsModeSection(props) {
  const {
    newContent,
    setNewContent,
    newSectionValue,
    setNewSectionValue,
    handlerChangeProperty,
    handlerAddRulesInSection,
    handlerAddRulesToNewContent,
  } = props;

  const classes = useStyles();

  return (
    <>
      {newContent.map(({ sectionId, nameSection, rules }, sectionIndex) => {
        return (
          <Grid
            key={`section-${sectionIndex}`}
            container
            direction="column"
            item
          >
            <Grid item>
              <Typography className={classes.titleSection} variant="h6">
                {nameSection}
              </Typography>
            </Grid>
            {rules &&
              Object.keys(rules).map((property, rulesIndex) => {
                return (
                  <Grid
                    item
                    xs={12}
                    className={classes.textField}
                    key={`section-${sectionIndex}-rules-${rulesIndex}`}
                  >
                    <TextField
                      fullWidth
                      size="small"
                      type={
                        isNaN(parseInt(rules[property])) ? "text" : "number"
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
            {!!newSectionValue.rules &&
            newSectionValue.nameSection === nameSection &&
              Object.keys(newSectionValue.rules).map(
                (property, indexNewRules) => {
                  return (
                    <Grid
                      key={`section-${sectionIndex}-rules-${indexNewRules}`}
                      item
                      xs={12}
                      container
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid className={classes.textField} item>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name={property}
                          label="Название"
                          variant="outlined"
                          value={property}
                          onChange={(e) =>
                            setNewSectionValue({
                              ...newSectionValue,
                              rules: {
                                [e.target.value]:
                                  newSectionValue.rules[property],
                              },
                            })
                          }
                        />
                      </Grid>
                      <Grid className={classes.textField} item>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name={property}
                          label="Значение"
                          variant="outlined"
                          value={newSectionValue.rules[property]}
                          onChange={(e) =>
                            setNewSectionValue({
                              ...newSectionValue,
                              rules: { [property]: e.target.value },
                            })
                          }
                        />
                      </Grid>
                      <Grid>
                        <Icon
                          color="secondary"
                          aria-label="delete"
                          onClick={() =>
                            handlerAddRulesToNewContent(nameSection, sectionId)
                          }
                        >
                          done
                        </Icon>
                      </Grid>
                    </Grid>
                  );
                }
              )}

            <Box className={classes.linePlusRule}>
              <Divider />
              <Box className={classes.boxAddRules} onClick={() => handlerAddRulesInSection(nameSection)}>
                <span style={{marginRight: '1rem'}}>Добавить правило</span>
                <Icon
                  color="secondary"
                  size="small"
                  aria-label="delete"
                >
                  add_circle
                </Icon>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default GraphicsModeSection;
