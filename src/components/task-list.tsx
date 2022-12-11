import React from "react";

import { lProps } from "../modules";

import Task from "./task";

function TaskList({ todoData, onDeleted, onCompleted }: lProps) {
  const elements = todoData.map((element: any) => {
    const { id, label, done, time } = element;
    return (
      <Task
        time={time}
        done={done}
        key={id}
        label={label}
        id={id}
        onDeleted={() => {
          onDeleted(id);
        }}
        onCompleted={() => {
          onCompleted(id);
        }}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;
