import React, { useContext } from "react";
import Item from "./Item";

import { ListContext } from "../contexts/ListContext";

const ItemList = () => {
  const { state } = useContext(ListContext);
  // need to import a useContext from(ListContext)
  //need to set items against useContext

  console.log(state);
  return (
    <div>
      {state.todoItems.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
