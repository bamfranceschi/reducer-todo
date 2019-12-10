import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";

const ItemList = () => {
  const [itemsState, dispatch] = useReducer(reducer, initialState);
  console.log(itemsState);
  return (
    <div>
      {itemsState.map(item => (
        <p>{item.item}</p>
      ))}
    </div>
  );
};

export default ItemList;
