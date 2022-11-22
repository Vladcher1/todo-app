import { render } from "@testing-library/react";
import React, { Component } from "react";
import { isArgumentsObject } from "util/types";
import Task from "./task";

type Props = {
  todoData: any;
  onDeleted: Function;
  onCompleted: Function;
};


const TaskList = ({ todoData, onDeleted, onCompleted }: Props) => {
  const elements = todoData.map((element: any) => {
    const {
      id,
      checked,
      onToggleDone,
      label,
      uncompleted,
      addItem,
      ...elementProps
    } = element;

    return (
      <Task
        {...element}
        key={id}
        onDeleted={() => {
          onDeleted(id);
        }}
        addItem={() => {
          addItem(label);
        }}
        onCompleted={() => {
          onCompleted(id);
        }}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
  todoData: () => {},
  onDeleted: () => {},
  onCompleted: () => {},
};
export default TaskList;
