import React from "react";

import { Props } from "../modules";

import TasksFilter from "./tasks-filter";

function Footer({
  deleteAllCompleted,
  getUndone,
  filterChange,
  filter,
}: Props) {
  return (
    <footer className="footer">
      <span className="todo-count">{getUndone} items left</span>
      <TasksFilter filter={filter} filterChange={filterChange} />
      <button
        type="button"
        className="clear-completed"
        onClick={() => {
          deleteAllCompleted();
        }}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
