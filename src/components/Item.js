import React, { useContext } from "react";

import { ListContext } from "../contexts/ListContext";

function Item(props) {
  const { completeToDo } = useContext(ListContext);

  const onClick = e => {
    e.stopPropagation();
    completeToDo(props.item);
  };

  const classNames = ["toDoItem"];

  if (props.item.completed) {
    classNames.push("completed");
  }

  return (
    <div>
      <p className={classNames.join(" ")} onClick={onClick}>
        {props.item.name}
      </p>
    </div>
  );
}

export default Item;
