import { Todo } from "./Todo";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [task, setTask] = useState([]);

  const getInput = (text) => {
    setTask([...task, text]);
  };
  return (
    <>
      <Todo get={getInput} />
      {task.map((e) => (
        <TodoItem todo={e} />
      ))}
    </>
  );
};
