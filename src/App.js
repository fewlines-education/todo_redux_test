import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { getTodos } from "./store/selectors";
import { updateTodos } from "./store/handlers";
import Form from "./modules/todo/form";
import List from "./modules/todo/list";

export const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">MY TODO LIST</h1>
      </header>

      <div className="container mt-4">
        <Form onSave={props.addTodoItem} />
        <List todos={props.todos} onUpdate={props.toggleTodoItemState} />
      </div>
    </div>
  );
}

export default connect(getTodos, updateTodos)(App);
