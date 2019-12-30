import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import "./styles.css";


export default function ToDoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
     
    </div>
  );
}
