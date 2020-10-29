import React from "react";
import TextMode from "./TextMode";
import GraphicsMode from "./GraphicsMode";
import SwitchMode from "./SwitchMode";

function Editor(props) {
  return (
    <div style={{ position: "relative" }}>
      {!!props.selectedFileId ? (
        <>
          <SwitchMode changeMode={props.changeMode} />
          {props.mode ? (
            <TextMode
              file={props.file}
              editContentFile={props.editContentFile}
            />
          ) : (
            <GraphicsMode
              file={props.file}
              editContentFile={props.editContentFile}
            />
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Editor;
