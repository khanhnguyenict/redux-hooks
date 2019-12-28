import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";


export default function ToDoApp() {
  const [state, setstate] = useState();
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      {/* <TodoList /> */}
      {/* <VisibilityFilters /> */}
    </div>
  );
}
