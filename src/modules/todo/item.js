import React from "react";

const ItemBox = (props) => {
  return (
    <span className="d-inline-block border rounded bg-white border-dark checkboxItem text-success"
          onClick={props.onChangeStatus}>
          {props.checked ? "✔" : " "}
    </span>
  );
};

const Item = (props) => {
  const handleChange = () => props.onUpdate(props.todo);

  return (
    <div className="my-1 py-2 px-2 border rounded bg-light">
      <div className="d-flex justify-content-between align-items-center">
        <div>{props.todo.name}</div>
        <div className="text-right">
          <ItemBox checked={props.todo.done} onChangeStatus={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Item;
