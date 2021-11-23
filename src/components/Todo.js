import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTodo(task.id)}>
        {task.text}
      </div>
      <div className="icons"></div>
    </div>
  ));
}

export default Todo;
