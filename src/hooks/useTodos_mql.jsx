import React from "react";
import { useWatch } from "./useWatch";
import { useCollection } from "./useCollection";
import { useApp } from "../components/RealmApp";
import atlasConfig from "../atlasConfig.json";
import {
  addValueAtIndex,
  replaceValueAtIndex,
  updateValueAtIndex,
  removeValueAtIndex,
  getTodoIndex,
} from "../utils";
import { useNavigate } from "react-router-dom";

const { dataSourceName } = atlasConfig;

export function useTodos() {
  // Set up a list of todos in state
  const app = useApp();
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const currentProjectName = window.env.REACT_APP_NAME;
  const currentProjectMetadata = window.env.REACT_APP_PROJECTS.find(
    (project) => project.name === currentProjectName,
  );

  if (!currentProjectMetadata) {
    console.error(`Metadata not found for project: ${currentProjectName}`);
    return;
  }

  const { db, collection } = currentProjectMetadata;

  let todoItemCollection;

  try {
    todoItemCollection = useCollection({
      cluster: dataSourceName,
      db,
      collection,
    });
  } catch (error) {
    console.error("Error while creating the collection:", error);
    // Handle the error here, you might want to display an error message to the user
    // or take any other necessary action.
    // You can also set `todoItemCollection` to a default value in case of an error.
    todoItemCollection = null; // Or any other default value
    Navigate("/");
  }

  // Now you can use `todoItemCollection` safely, whether it was successfully created or not.

  // Fetch all todos on load and whenever our collection changes (e.g. if the current user changes)
  React.useEffect(() => {
    let shouldUpdate = true;
    const fetchTodos = todoItemCollection.find({});
    if (shouldUpdate) {
      fetchTodos.then((fetchedTodos) => {
        setTodos(fetchedTodos);
        setLoading(false);
      });
    }
    return () => {
      shouldUpdate = false;
    };
  }, [todoItemCollection]);

  // Use a MongoDB change stream to reactively update state when operations succeed
  useWatch(todoItemCollection, {
    onInsert: (change) => {
      setTodos((oldTodos) => {
        if (loading) {
          return oldTodos;
        }
        const idx =
          getTodoIndex(oldTodos, change.fullDocument) ?? oldTodos.length;
        if (idx === oldTodos.length) {
          return addValueAtIndex(oldTodos, idx, change.fullDocument);
        } else {
          return oldTodos;
        }
      });
    },
    onUpdate: (change) => {
      setTodos((oldTodos) => {
        if (loading) {
          return oldTodos;
        }
        const idx = getTodoIndex(oldTodos, change.fullDocument);
        return updateValueAtIndex(oldTodos, idx, () => {
          return change.fullDocument;
        });
      });
    },
    onReplace: (change) => {
      setTodos((oldTodos) => {
        if (loading) {
          return oldTodos;
        }
        const idx = getTodoIndex(oldTodos, change.fullDocument);
        return replaceValueAtIndex(oldTodos, idx, change.fullDocument);
      });
    },
    onDelete: (change) => {
      setTodos((oldTodos) => {
        if (loading) {
          return oldTodos;
        }
        const idx = getTodoIndex(oldTodos, { _id: change.documentKey._id });
        if (idx >= 0) {
          return removeValueAtIndex(oldTodos, idx);
        } else {
          return oldTodos;
        }
      });
    },
  });

  // Given a draft todo, format it and then insert it
  const saveTodo = async (draftTodo) => {
    //console.log(draftTodo.data);
    if (draftTodo.data.summary && draftTodo.data.price) {
      //console.log(draftTodo.data);
      draftTodo.data.owner_id = app.currentUser.id;
      draftTodo.data.isComplete = false;
      try {
        console.log(draftTodo);
        await todoItemCollection.insertOne(draftTodo.data);
      } catch (err) {
        if (err.error.match(/^Duplicate key error/)) {
          console.warn(
            `The following error means that this app tried to insert a todo multiple times (i.e. an existing todo has the same _id). In this app we just catch the error and move on. In your app, you might want to debounce the save input or implement an additional loading state to avoid sending the request in the first place.`,
          );
        }
        console.error(err);
      }
    }
  };

  // Toggle whether or not a given todo is complete
  const toggleTodo = async (todo) => {
    await todoItemCollection.updateOne(
      { _id: todo._id },
      { $set: { isComplete: !todo.isComplete } },
    );
  };

  // Delete a given todo
  const deleteTodo = async (todo) => {
    await todoItemCollection.deleteOne({ _id: todo._id });
  };

  return {
    loading,
    todos,
    saveTodo,
    toggleTodo,
    deleteTodo,
  };
}
