// import { isArgumentsObject } from "util/types";
// import { render } from "@testing-library/react";
import React from "react";

import Task from "./task";

type lProps = {
  todoData: any;
  onDeleted: Function;
  onCompleted: Function;
};

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
