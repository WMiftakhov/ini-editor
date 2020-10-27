import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import EditorWrapper from './EditorWrapper';
import FilesList from './FilesList';
import Editor from './Editor';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fileListColumn: {
    borderRight: '1px solid #eee',
    minHeight: '100%',
  },
  pageContainer: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const [mode, setMode] = useState(1);
  return (
    <Grid
      className={classes.pageContainer}
      container
      justify="center"
      alignItems="center"
      spacing={0}>
      <Grid item md={10} xl={6}>
        <EditorWrapper>
          <Grid container spacing={4}>
            <Grid className={classes.fileListColumn} item xs={4}>
              <FilesList />
            </Grid>
            <Grid container direction={'column'} item xs={8}>
              <Grid item>
                <Editor mode={mode} changeMode={setMode} />
              </Grid>
            </Grid>
          </Grid>
        </EditorWrapper>
      </Grid>
    </Grid>
  );
};

export default MainPage;
