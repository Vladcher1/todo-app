import React from "react";

import { Props } from "../modules";

import Task from "./task";

const TaskList: React.FC<
  Pick<Props, "todoData" | "onCompleted" | "onDeleted" | "isRunningStopwatch">
> = ({ todoData, onDeleted, onCompleted, isRunningStopwatch }) => {
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
        // onDeleted={() => {
        //   onDeleted(id);
        // }}
        // onCompleted={() => {
        //   onCompleted(id);
        // }}
        onDeleted={onDeleted}
        onCompleted={onCompleted}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
