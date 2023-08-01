import React from "react";
import { createObjectId } from "../utils";

export function useDraftTodos() {
  const [drafts, setDrafts] = React.useState([]);

  const createDraftTodo = () => {
    const draftTodo = {
      data: { summary: "", price: 0, isComplete: false, owner_id: "" },
      //isComplete: false,
    };
    setDrafts((d) => [...d, draftTodo]);
  };

  const setDraftTodoSummary = (draft, summary) => {
    /// create a cont with summary
    const data = {
      summary,
      price: draft.data.price,
    };

    setDrafts((oldDrafts) => {
      const idx = oldDrafts.findIndex((d) => d._id === draft._id);
      console.log([
        ...oldDrafts.slice(0, idx),
        { ...oldDrafts[idx], data },
        ...oldDrafts.slice(idx + 1),
      ]);
      return [
        ...oldDrafts.slice(0, idx),
        { ...oldDrafts[idx], data },
        ...oldDrafts.slice(idx + 1),
      ];
    });
  };
  const setDraftTodoPrice = (draft, price) => {
    /// create a cont with summary
    const data = {
      summary: draft.data.summary,
      price: price,
    };

    setDrafts((oldDrafts) => {
      const idx = oldDrafts.findIndex((d) => d._id === draft._id);
      return [
        ...oldDrafts.slice(0, idx),
        { ...oldDrafts[idx], data },
        ...oldDrafts.slice(idx + 1),
      ];
    });
  };

  const deleteDraftTodo = (draft) => {
    setDrafts((oldDrafts) => {
      const idx = oldDrafts.findIndex((d) => d._id === draft._id);
      return [...oldDrafts.slice(0, idx), ...oldDrafts.slice(idx + 1)];
    });
  };

  return {
    draftTodos: drafts,
    createDraftTodo,
    setDraftTodoSummary,
    deleteDraftTodo,
    setDraftTodoPrice,
  };
}
