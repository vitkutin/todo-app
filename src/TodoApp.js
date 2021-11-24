import React from "react";
import "./TodoApp.css";
import TodoList from "./components/TodoList";
import { Outlet, Link } from "react-router-dom";

function TodoApp() {
  return (
    <div className="Todo-app">
      <nav>
        <Link to="/">Todo</Link> | <Link to="/yucca">Archive</Link> |{" "}
        <Link to="/englishivy">Info</Link>
      </nav>
      <Outlet />
      <TodoList />
    </div>
  );
}

export default TodoApp;
