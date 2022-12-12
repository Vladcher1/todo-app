import React from "react";

import { TaskListProps } from "../modules";

import Task from "./task";

function TaskList({
  todoData,
  onDeleted,
  onCompleted,
  isRunningStopwatch,
}: TaskListProps) {
  const elements = todoData.map((element: any) => {
    const { id, label, done, time, running } = element;
    return (
      <Task
        isRunningStopwatch={() => isRunningStopwatch(id)}
        running={running}
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
