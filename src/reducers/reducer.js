export const initialState = {
  todoItems: [
    {
      name: "check email",
      completed: false,
      id: 1
    },
    {
      name: "buy Xmas tree",
      completed: false,
      id: 2
    },
    {
      name: "cook dinner",
      completed: false,
      id: 3
    },
    {
      name: "walk the dog",
      completed: false,
      id: 4
    },
    {
      name: "unpack",
      completed: false,
      id: 5
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newItem = {
        name: action.payload,
        completed: false,
        id: Date.now()
      };

      return {
        ...state,
        todoItems: [...state.todoItems, newItem]
      };
    case "COMPLETE_CLICK":
      //incorporate payload here, and set to a simple toggle
      return {
        ...state,
        todoItems: state.todoItems.map(item => {
          if (item.id === action.payload.id) {
            item.completed = !action.payload.completed;
          }
          return item;
        })
      };
    case "CLEAR_COMPLETE":
      return {
        ...state,
        todoItems: state.todoItems.filter(item => item.completed === false)
      };
    default:
      return state;
  }
};
