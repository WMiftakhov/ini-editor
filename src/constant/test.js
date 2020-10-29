
import { v4 as uuidv4 } from "uuid";
import {convertDate} from '../helpers/convertDate'

export const objectResult = 
  {
    id: uuidv4(),
    fileName: "newFile",
    created: convertDate(),
    changed: "",
    edit: false,
    content: [
      {
        nameSection: "text",
        rules: { text: "text", numberString: 2 },
      },

      {
        nameSection: "text",
        rules: { text: "text", numberString: 2 },
      },

      {
        nameSection: "text",
        rules: { text: "text", numberString: 2 },
      },
    ],
  }
