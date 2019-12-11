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
    default:
      return state;
  }
};
