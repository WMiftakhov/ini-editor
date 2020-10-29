import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GraphicsModeSection from "./GraphicsModeSection";
import { v4 as uuidv4 } from "uuid";

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

function GraphicsMode(props) {
  const classes = useStyles();

  const [newContent, setNewContent] = useState(props.file.content || []);
  const [newSectionValue, setNewSectionValue] = useState({});
  const [newSection, setNewSection] = useState("");

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
    setNewSectionValue({ nameSection, rules: { newRules: "newValue" } });
  };

  const handlerAddRulesToNewContent = (nameSection, sectionId) => {
    const { rules, updateSectionValue } = newSectionValue;
    setNewContent([
      ...newContent.map((section) => {
        if (section.sectionId === sectionId) {
          return { ...section, rules: { ...section.rules, ...rules } };
        } else {
          return section;
        }
      }),
    ]);
    setNewSectionValue({})
  };

  const handlerAddNewSection = () => {
    setNewContent([
      ...newContent, {nameSection: newSection.newSectionName, sectionId: uuidv4(), rules: {}}
    ]);
    setNewSection('')
  }

  console.log(newSection)

  return (
    <Grid container direction="column" item xs={12}>
      <Grid item>
          <Typography variant="h6">Редактирование файла</Typography>
        </Grid>
      <GraphicsModeSection
        file={props.file}
        newContent={newContent}
        setNewContent={setNewContent}
        newSectionValue={newSectionValue}
        setNewSectionValue={setNewSectionValue}
        handlerChangeProperty={handlerChangeProperty}
        handlerAddRulesInSection={handlerAddRulesInSection}
        handlerAddRulesToNewContent={handlerAddRulesToNewContent}
      />

      <Grid container justify="flex-end" item style={{ margin: "1rem 0" }}>
        {newSection && <Grid
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
              name="newSectionName"
              label="Название секции"
              variant="outlined"
              value={newSection.newSectionName}
              onChange={(e) =>
                setNewSection({[e.target.name]: e.target.value})
              }
            />
          </Grid>
          <Grid>
            <Icon
              color="secondary"
              aria-label="save"
              onClick={handlerAddNewSection}
            >
              done
            </Icon>
          </Grid>
        </Grid>}
        <Grid item>
          <Button
            size="small"
            variant="contained"
            onClick={() => setNewSection({newSectionName: ""})}
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
            onClick={() => props.editContentFile(props.file.id, newContent)}
          >
            Сохранить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GraphicsMode;
