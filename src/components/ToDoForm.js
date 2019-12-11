import React, { useState, useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const ToDoForm = () => {
  //import ListContext
  //set destructured variable to ListContext

  const { addToDo } = useContext(ListContext);

  const [newToDo, setNewToDo] = useState("");

  const handleChanges = e => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    debugger;
    addToDo(newToDo);
    setNewToDo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="add todo"
        type="text"
        name="toDo"
        value={newToDo}
        onChange={handleChanges}
      ></input>
      <button>Add ToDo </button>
    </form>
  );
};

export default ToDoForm;
