import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Icon, Tooltip, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GraphicsModeSection from './GraphicsModeSection';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  titleSection: {
    marginBottom: '1rem',
    marginTop: '1rem',
    marginLeft: '.5rem',
  },
  textField: {
    padding: '1rem .5rem',
    flexGrow: 1,
  },
  buttonBlock: {
    marginTop: theme.spacing(2),
  },
}));

function GraphicsMode(props) {
  const classes = useStyles();

  const [newContent, setNewContent] = useState(props.file.content || []);
  const [newSectionValue, setNewSectionValue] = useState({});
  const [newSection, setNewSection] = useState('');

  useEffect(() => {
    setNewContent(props.file.content);
  }, [props.file.content]);

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

  const handlerAddRulesInSection = (nameSection) => {
    setNewSectionValue({ nameSection, rules: { newRules: 'newValue' } });
  };

  const handlerAddRulesToNewContent = (nameSection, sectionId) => {
    setNewContent([
      ...newContent.map((section) => {
        if (section.sectionId === sectionId) {
          return { ...section, rules: { ...section.rules, ...newSectionValue.rules } };
        } else {
          return section;
        }
      }),
    ]);
    setNewSectionValue({});
  };

  const handlerAddNewSection = () => {
    setNewContent([
      ...newContent,
      { nameSection: newSection.newSectionName, sectionId: uuidv4(), rules: {} },
    ]);
    setNewSection('');
  };

  console.log(newSection);

  return (
    <Grid container direction="column" item xs={12}>
      <GraphicsModeSection
        file={props.file}
        newContent={newContent}
        newSectionValue={newSectionValue}
        setNewSectionValue={setNewSectionValue}
        handlerChangeProperty={handlerChangeProperty}
        handlerAddRulesInSection={handlerAddRulesInSection}
        handlerAddRulesToNewContent={handlerAddRulesToNewContent}
      />

      <Grid container justify="flex-end" item style={{ margin: '1rem 0' }}>
        {newSection && (
          <Grid item xs={12} container justify="space-between" alignItems="center">
            <Grid className={classes.textField} item>
              <TextField
                fullWidth
                size="small"
                type="text"
                name="newSectionName"
                label="Название секции"
                variant="outlined"
                value={newSection.newSectionName}
                onChange={(e) => setNewSection({ [e.target.name]: e.target.value })}
              />
            </Grid>
            <Grid>
              <Tooltip
                title="Добавить"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 500 }}>
                <Icon color="secondary" aria-label="save" onClick={handlerAddNewSection}>
                  done
                </Icon>
              </Tooltip>
            </Grid>
          </Grid>
        )}
        <Grid item container spacing={2} className={classes.buttonBlock} justify="flex-end">
          {!newSection && (
            <Grid item>
              <Button
                size="small"
                variant="contained"
                onClick={() => setNewSection({ newSectionName: '' })}
                color="primary"
                startIcon={<Icon>add</Icon>}>
                Добавить секцию
              </Button>
            </Grid>
          )}
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<Icon>save</Icon>}
              onClick={() => props.editContentFile(props.file.id, newContent)}>
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GraphicsMode;
