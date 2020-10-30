import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Icon, Box } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

function TextMode(props) {
  const [fileContent, setFileContent] = useState();

  const contentFileToString = (content) => {
    let contentString = '';
    let countSection = 0;
    if (typeof content === 'object') {
      for (let section of content) {
        contentString += countSection
          ? `\n[${section.nameSection}]\n`
          : `[${section.nameSection}]\n`;
        for (let property in section.rules) {
          contentString += `${property} = ${section.rules[property]}\n`;
        }
        countSection++;
      }
      return setFileContent(contentString);
    }

    return setFileContent('');
  };

  const saveFile = () => {
    let newContent = [];
    let regex = {
      section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
      rules: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
      comment: /^\s*;.*$/,
    };
    let fileContentLines = fileContent.split(/[\r\n]+/);
    let newSectionId = null;
    fileContentLines.forEach((line) => {
      if (regex.comment.test(line)) {
        return;
      } else if (regex.section.test(line)) {
        let section = line.match(regex.section)[1];
        newSectionId = uuidv4();
        newContent = [...newContent, { nameSection: section, sectionId: newSectionId }];
      } else if (regex.rules.test(line)) {
        let rule = line.match(regex.rules);
        newContent = newContent.map((contentSection) => {
          const { nameSection, sectionId, rules } = contentSection;
          if (sectionId === newSectionId) {
            return {
              nameSection: nameSection,
              sectionId: sectionId,
              rules: { ...rules, [rule[1]]: rule[2] },
            };
          } else return contentSection;
        });
      } else if (line.length === 0 && newSectionId) {
        newSectionId = null;
      }
    });

    props.editContentFile(props.file.id, newContent);
  };

  useEffect(() => {
    contentFileToString(props.file.content);
  }, [props.file.content]);

  return (
    <Grid container direction="column" item xs={12}>
      <Grid item xs={12}>
        <Box mt={4} mb={4}>
          <TextField
            fullWidth
            label={`${props.file.fileName}.ini`}
            multiline
            value={fileContent}
            onChange={(e) => setFileContent(e.target.value)}
            variant="outlined"
            rows={22}
          />
        </Box>
      </Grid>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Icon>save</Icon>}
          onClick={saveFile}>
          Сохранить
        </Button>
      </Grid>
    </Grid>
  );
}

export default TextMode;
