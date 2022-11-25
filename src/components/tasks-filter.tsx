import React from "react";

type Props = {
  filterChange: Function;
};
function TasksFilter({ filterChange }: Props) {
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className="selected"
          onClick={() => {
            filterChange("all");
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            filterChange("active");
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            filterChange("done");
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

// TasksFilter.defaultProps = {
//   filterChange: () => {},
// };

export default TasksFilter;
