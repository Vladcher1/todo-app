import React from "react";
import TasksFilter from "./tasks-filter";

type Props = {
  deleteAllCompleted: Function;
  getUndone: Function;
  filterTasks: Function;
  filterChange: Function;
};
const Footer = ({
  deleteAllCompleted,
  getUndone,
  filterChange,
}: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{getUndone()} items left</span>
      <TasksFilter filterChange={filterChange} />
      <button
        className="clear-completed"
        onClick={() => {
          deleteAllCompleted();
        }}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  deleteAllCompleted: () => {},
  getUndone: () => {},
  filterTasks: () => {},
  filterChange: () => {},
};

export default Footer;
