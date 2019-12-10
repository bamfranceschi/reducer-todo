import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/reducer";
import "./App.css";

import ItemList from "./components/ItemList";

function App() {
  const [itemsState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Get Sh*t Done List</h1>
      <ItemList />
    </div>
  );
}

export default App;
