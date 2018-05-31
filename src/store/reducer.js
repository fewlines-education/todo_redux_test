const initialState = {
  todos: [
    {id: 1, name: "Be where we are needed", done: true},
    {id: 2, name: "Preserve our planet and its people to protect our purpose", done: false}
  ]
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD":
      return {
        ...state,
        todos: addItem(state.todos, action.todo)
      };
    case "TOGGLE_STATE":
      return {
        ...state,
        todos: toggleItemState(state.todos, action.id)
      };
    default:
      return state;
  }
}

const addItem = (todos, item) =>
  [...todos, item];

const toggleItemState = (todos, id) =>
  todos.map((todo) =>
    todo.id === id
    ? {...todo, done: !todo.done}
    : todo
  )

export default reducer;
