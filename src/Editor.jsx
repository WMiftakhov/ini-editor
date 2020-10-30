import React from 'react';
import TextMode from './TextMode';
import GraphicsMode from './GraphicsMode';
import SwitchMode from './SwitchMode';
import BeforeEditFile from './BeforeEditFile';

function Editor(props) {
  return (
    <div>
      {!!props.selectedFileId ? (
        <>
          <SwitchMode changeMode={props.changeMode} />
          {props.mode ? (
            <TextMode file={props.file} editContentFile={props.editContentFile} />
          ) : (
            <GraphicsMode file={props.file} editContentFile={props.editContentFile} />
          )}
        </>
      ) : (
        <BeforeEditFile />
      )}
    </div>
  );
}

export default Editor;
