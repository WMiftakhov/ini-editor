import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  Icon,
  ListItemSecondaryAction,
  TextField,
} from "@material-ui/core";

function EditFileName(props) {
  const [inputValue, setChangeInputValue] = useState(props.fileName);

  return (
    <ListItem button>
      <ListItemIcon>
        <Icon>description</Icon>
      </ListItemIcon>
      <TextField
        size="small"
        name="fileName"
        value={inputValue}
        onChange={(e) => setChangeInputValue(e.target.value)}
      />
      <ListItemSecondaryAction>
        <Icon
          color="secondary"
          onClick={() =>
            props.onChangeNameFile("fileName", inputValue, props.id)
          }
          aria-label="delete"
        >
          done
        </Icon>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default EditFileName;
