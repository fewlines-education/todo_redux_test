import React from "react";
import Item from "./item";

const ListItem = (props) => {
  return (
    <div className="row">
      <div className="col">
        <Item todo={props.todo} onUpdate={props.onUpdate} />
      </div>
    </div>
  );
}

const List = (props) => {
  return (
    <div>
      {props.todos.sort().map((todo) =>
        <ListItem key={todo.id} todo={todo} onUpdate={props.onUpdate}/>)
      }
    </div>
  );
}

export default List;
