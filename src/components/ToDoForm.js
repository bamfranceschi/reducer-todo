import React, { useState, useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const ToDoForm = () => {
  //import ListContext
  //set destructured variable to ListContext

  const { addToDo, clearComplete } = useContext(ListContext);

  const [newToDo, setNewToDo] = useState("");

  const handleChanges = e => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addToDo(newToDo);
    setNewToDo("");
  };

  const onClick = e => {
    e.preventDefault();
    clearComplete();
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
      <button>Add ToDo</button>
      <button onClick={onClick}>Clear Completed</button>
    </form>
  );
};

export default ToDoForm;
