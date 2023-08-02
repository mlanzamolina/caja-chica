import React from "react";
import {
  TextField,
  Button,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { withStyles } from "tss-react/mui";
import ClearIcon from "@mui/icons-material/Clear";

const ListItemWithTwoSecondaryActions = withStyles(ListItem, {
  secondaryAction: {
    paddingRight: "120px",
  },
});

export function DraftTodoItem({ todo, todoActions, draftTodoActions }) {
  return (
    <ListItemWithTwoSecondaryActions>
      <ListItemText inset>
        <TextField
          style={{ width: "100%" }}
          placeholder="Ingresar evento?"
          size="small"
          value={todo.data.summary}
          onChange={(e) => {
            draftTodoActions.setDraftTodoSummary(todo, e.target.value);
          }}
        />
      </ListItemText>
      <ListItemText inset>
        <TextField
          style={{ width: "100%" }}
          placeholder="Cuanto ocupamos?"
          size="small"
          value={todo.data.price}
          onChange={(e) => {
            draftTodoActions.setDraftTodoPrice(todo, e.target.value);
          }}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          size="small"
          onClick={async () => {
            await todoActions.saveTodo(todo);
            draftTodoActions.deleteDraftTodo(todo);
          }}
        >
          Save
        </Button>
        <IconButton
          edge="end"
          size="small"
          onClick={() => {
            draftTodoActions.deleteDraftTodo(todo);
          }}
        >
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemWithTwoSecondaryActions>
  );
}
