import React from 'react';
import TextMode from './TextMode';
import GraphicsMode from './GraphicsMode';
import SwitchMode from './SwitchMode';

function Editor(props) {
  return (
    <div style={{ position: 'relative' }}>
      <SwitchMode changeMode={props.changeMode} />
      {props.mode ? <GraphicsMode /> : <TextMode />}
    </div>
  );
}

export default Editor;
