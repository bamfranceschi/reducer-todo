export const initialState = [
  {
    item: "check email",
    completed: false,
    id: 1
  },
  {
    item: "buy Xmas tree",
    completed: false,
    id: 2
  },
  {
    item: "cook dinner",
    completed: false,
    id: 3
  },
  {
    item: "walk the dog",
    completed: false,
    id: 4
  },
  {
    item: "unpack",
    completed: false,
    id: 5
  }
];

console.log(initialState);

export const reducer = (state, action) => {
  console.log(state);
  return state;
};
