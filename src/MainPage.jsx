import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import EditorWrapper from './EditorWrapper';
import FilesList from './FilesList';
import Editor from './Editor';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import { convertDate } from './helpers/convertDate';

const useStyles = makeStyles(() => ({
  fileListColumn: {
    borderRight: '1px solid #eee',
    minHeight: '100%',
  },
  pageContainer: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  wrapper: {
    minHeight: '620px',
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const [mode, setMode] = useState(1);
  const [files, setFiles] = useState(JSON.parse(localStorage.getItem('iniFiles')) || []);
  const [selectedFileId, setSelectedFileId] = useState('');

  const handlerCreateFile = () => {
    setFiles([
      ...files,
      {
        id: uuidv4(),
        fileName: 'newFile',
        created: convertDate(),
        changed: '',
        edit: true,
        content: '',
      },
    ]);
  };

  const onChangeNameFile = (name, value, fileId) => {
    setFiles([
      ...files.map((file) => {
        if (file.id === fileId) {
          return { ...file, [name]: value, edit: false };
        } else {
          return file;
        }
      }),
    ]);
  };

  const editContentFile = (fileId, content) => {
    setFiles([
      ...files.map((file) => {
        if (file.id === fileId) {
          return { ...file, content, changed: convertDate() };
        } else {
          return file;
        }
      }),
    ]);
  };

  const handlerSelectedFile = (id) => {
    setSelectedFileId(id);
  };

  const deleteFile = (id) => {
    if (selectedFileId.id === id) setSelectedFileId('');
    setFiles([...files.filter((file) => file.id !== id)]);
  };

  useEffect(() => {
    localStorage.setItem('iniFiles', JSON.stringify(files));
  }, [files]);

  return (
    <Grid
      className={classes.pageContainer}
      container
      justify="center"
      alignItems="center"
      spacing={0}>
      <Grid item md={10} xl={6}>
        <EditorWrapper>
          <Grid container spacing={4} className={classes.wrapper}>
            <Grid className={classes.fileListColumn} item xs={12} md={4}>
              <FilesList
                files={files}
                handlerCreateFile={handlerCreateFile}
                deleteFile={deleteFile}
                onChangeNameFile={onChangeNameFile}
                handlerSelectedFile={handlerSelectedFile}
              />
            </Grid>
            <Grid container direction={'column'} item xs={12} md={8}>
              <Grid item>
                <Editor
                  editContentFile={editContentFile}
                  selectedFileId={selectedFileId}
                  file={files.filter((file) => file.id === selectedFileId)[0]}
                  mode={mode}
                  changeMode={setMode}
                />
              </Grid>
            </Grid>
          </Grid>
        </EditorWrapper>
      </Grid>
    </Grid>
  );
};

export default MainPage;
