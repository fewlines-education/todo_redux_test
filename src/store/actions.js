export const addItem = (todo) =>
  ({type: "ADD", todo: todo});

export const addingItem = () =>
  ({type: "ADDING"});

export const toggleItemState = (todo) =>
  ({type: "TOGGLE_STATE", id: todo.id});

export const togglingItemState = () =>
  ({type: "TOGGLING_STATE"});
