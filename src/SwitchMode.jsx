import React from "react";
import { ButtonGroup, Button, Icon } from "@material-ui/core";

function SwitchMode(props) {
  return (
    <ButtonGroup
      size="small"
      disableElevation
      variant="contained"
      color="primary"
      style={{ position: "absolute", right: 0, top: "1rem" }}
    >
      <Button onClick={() => props.changeMode(1)}>
        <Icon>view_headline</Icon>
      </Button>
      <Button onClick={() => props.changeMode(0)}>
        <Icon>image</Icon>
      </Button>
    </ButtonGroup>
  );
}

export default SwitchMode;
