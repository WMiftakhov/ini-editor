import React from 'react';
import { Grid, Typography, TextField, Divider, Icon, Box, Tooltip, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleSection: {
    marginBottom: '1rem',
    marginTop: '1rem',
    marginLeft: '.5rem',
  },
  textField: {
    padding: '1rem .5rem',
    flexGrow: 1,
  },
  linePlusRule: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '1.5rem',
    '&:hover hr': {
      backgroundColor: '#3f51b5',
    },
    '&:hover div': {
      borderColor: '#3f51b5',
    },
    cursor: 'pointer',
  },
  boxAddRules: {
    position: 'absolute',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    padding: '0.1rem 1rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    transition: '.5s',
    '&:hover': {
      borderColor: '#3f51b5',
    },
  },
  hr: {
    transition: '.5s',
  },
}));

function GraphicsModeSection(props) {
  const {
    newContent,
    newSectionValue,
    setNewSectionValue,
    handlerChangeProperty,
    handlerAddRulesInSection,
    handlerAddRulesToNewContent,
  } = props;

  const classes = useStyles();

  return (
    <>
      {!!newContent.length &&
        newContent.map(({ sectionId, nameSection, rules }, sectionIndex) => {
          return (
            <Grid key={`section-${sectionIndex}`} container direction="column" item>
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
                      key={`section-${sectionIndex}-rules-${rulesIndex}`}>
                      <TextField
                        fullWidth
                        size="small"
                        type={isNaN(parseInt(rules[property])) ? 'text' : 'number'}
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
                Object.keys(newSectionValue.rules).map((property, indexNewRules) => {
                  return (
                    <Grid
                      key={`section-${sectionIndex}-rules-${indexNewRules}`}
                      item
                      xs={12}
                      container
                      justify="space-between"
                      alignItems="center"
                      wrap={'nowrap'}>
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
                                [e.target.value]: newSectionValue.rules[property],
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
                        <Tooltip
                          title="Добавить"
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 500 }}>
                          <Icon
                            color="secondary"
                            onClick={() => handlerAddRulesToNewContent(nameSection, sectionId)}>
                            done
                          </Icon>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  );
                })}

              <Box
                className={classes.linePlusRule}
                onClick={() => handlerAddRulesInSection(nameSection)}>
                <Divider className={classes.hr} />
                <Box className={classes.boxAddRules}>
                  <span style={{ marginRight: '1rem' }}>Добавить правило</span>
                  <Icon color="primary" size="small">
                    add
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
