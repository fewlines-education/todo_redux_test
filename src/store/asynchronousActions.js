import {
  addItem, addingItem,
  togglingItemState, toggleItemState,
} from "./actions";

export const addTodoItem = (name) => {
  return (dispatch) => {
    dispatch(addingItem());

    return fetch(`https://jsonplaceholder.typicode.com/todos/`, {method: "POST"})
      .then(response => response.json())
      .then((json) => ({id: json.id, name: name, done: false}))
      .then((todo) => dispatch(addItem(todo)))
  };
};

export const toggleTodoItemState = (todo) => {
  return (dispatch) => {
    dispatch(togglingItemState());

    return fetch(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      {method: "PUT"}
    )
    .then(response => response.json())
    .then((_json) => dispatch(toggleItemState(todo)))
  };
};
