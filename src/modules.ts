import React from "react";

export interface Todo {
  label: string;
  id: number;
  done: boolean;
  time: Date;
  running: boolean;
}

export interface State {
  todoData: Todo[];
  filter: string;
}

export interface Props {
  deleteAllCompleted: Function;
  getUndone: number;
  filterChange: Function;
  filter: string;
  addItem: Function;
  todoData: any;
  onDeleted: Function;
  onCompleted: Function;
  isRunningStopwatch: Function;
}

export interface Children {
  children: React.ReactNode;
}
export type TaskProps = Props & Todo;
