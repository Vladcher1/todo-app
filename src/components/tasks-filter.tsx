import React from "react";

type Props = {
  filterChange: Function;
};
const TasksFilter = ({ filterChange }: Props) => {
  return (
    <ul className="filters">
      <li>
        <button
          className="selected"
          onClick={() => {
            filterChange("all");
          }}>
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            filterChange("active");
          }}>
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            filterChange("done");
          }}>
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.defaultProps = {
  filterChange: () => { }
};

export default TasksFilter;
