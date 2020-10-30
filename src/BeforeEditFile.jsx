import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

function BeforeEditFile() {
  return (
    <Grid container direction="column" item xs={12}>
      <Grid item>
        <Typography variant="h6">INI Редактор </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2} mb={2}>
          <p>Выберите файл, чтобы перейти в режим редактирования.</p>
        </Box>
        <Box mt={2} mb={2}>
          <p>Редактирование файлов доступно в текстовом и графическом режиме.</p>
        </Box>
        <Box mt={2} mb={2}>
          <p>Структура файла *.ini имеет следующий вид:</p>
          <code
            style={{
              border: '1px solid rgba(0, 0, 0, 0.12)',
              display: 'block',
              padding: '1rem',
              borderRadius: '.25rem',
            }}>
            [FirstSection] <br />
            IntegerKey = 42 <br />
            StringKey = That’s true <br />
            <br />
            [NewSection] <br />
            StringKeyToo = It was added here
          </code>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BeforeEditFile;
