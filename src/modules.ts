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
}

export interface tProps {
  addItem: Function;
}

export interface TaskListProps {
  todoData: any;
  onDeleted: Function;
  onCompleted: Function;
  isRunningStopwatch: Function;
}

export interface TProps {
  label: string;
  done: boolean;
  onDeleted: any;
  onCompleted: any;
  time: Date;
  id: any;
}

export interface EProps {
  filterChange: Function;
  filter: string;
}
