import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Today's todo list</h1>
      <TodoForm onSubmit={addTask} />
    </div>
  );
}

export default TodoList;
