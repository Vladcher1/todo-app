import React from "react";

import TasksFilter from "./tasks-filter";

type Props = {
  deleteAllCompleted: Function;
  getUndone: Function;
  // filterTasks: Function;
  filterChange: Function;
};

function Footer({ deleteAllCompleted, getUndone, filterChange }: Props) {
  return (
    <footer className="footer">
      <span className="todo-count">{getUndone()} items left</span>
      <TasksFilter filterChange={filterChange} />
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

// Footer.defaultProps = {
// getUndone: () => {},
// filterTasks: () => {},
// filterChange: () => {},
// };

export default Footer;
