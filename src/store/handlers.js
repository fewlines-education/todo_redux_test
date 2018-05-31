import {addTodoItem, toggleTodoItemState} from "./asynchronousActions";

export const updateTodos = (dispatch) => {
  return {
    addTodoItem: (name) => dispatch(addTodoItem(name)),
    toggleTodoItemState: (todo) => dispatch(toggleTodoItemState(todo))
  };
}
