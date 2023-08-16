import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useTodos } from "../../hooks/useTodos";
import { TodoItem } from "../TodoItem";
import { useDraftTodos } from "../../hooks/useDraftTodos";
import { DraftTodoItem } from "../DraftTodoItem";
import { useShowLoader } from "../../hooks/util-hooks";
import { getTodoId } from "../../utils";
import {
  Container,
  Button,
  Typography,
  List,
  LinearProgress,
} from "@mui/material";

export default function index() {
  const { loading, todos, ...todoActions } = useTodos();
  const { draftTodos, ...draftTodoActions } = useDraftTodos();
  const showLoader = useShowLoader(loading, 200);
  //console.log("project", project);
  return (
    <div className="todo-items-container">
      <Typography component="p" variant="h5">
        {`You have ${todos.length} To-Do Item${todos.length === 1 ? "" : "s"}`}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => draftTodoActions.createDraftTodo()}
      >
        Add To-Do
      </Button>
      <List style={{ width: "100%" }}>
        {todos.map((todo) => (
          <TodoItem
            key={getTodoId(todo)}
            todo={todo}
            todoActions={todoActions}
          />
        ))}
        {draftTodos.map((draft) => (
          <DraftTodoItem
            key={getTodoId(draft)}
            todo={draft}
            todoActions={todoActions}
            draftTodoActions={draftTodoActions}
          />
        ))}
      </List>
    </div>
  );
}
