import React, { useContext } from "react";

import { ListContext } from "../contexts/ListContext";

const ItemList = () => {
  const { state } = useContext(ListContext);
  // need to import a useContext from(ListContext)
  //need to set items against useContext

  console.log(state);
  return (
    <div>
      {state.todoItems.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ItemList;
