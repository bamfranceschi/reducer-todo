import React, { useReducer } from "react";
import "./App.css";
import { reducer, initialState } from "./reducers/reducer";

import { ListContext } from "./contexts/ListContext";

import ItemList from "./components/ItemList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToDo = item => {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  const completeToDo = item => {
    dispatch({ type: "COMPLETE_CLICK", payload: item });
  };

  const clearComplete = () => {
    dispatch({ type: "CLEAR_COMPLETE" });
  };

  return (
    <ListContext.Provider
      value={{ state, addToDo, completeToDo, clearComplete }}
    >
      <div className="App">
        <h1>Get Sh*t Done List</h1>
        <ItemList />
        <ToDoForm />
      </div>
    </ListContext.Provider>
  );
}

export default App;
