import { EProps } from "../modules";

function TasksFilter({ filterChange, filter }: EProps) {
  let classNamesAll = "";
  let classNamesActive = "";
  let classNamesDone = "";

  if (filter === "all") {
    classNamesAll = "selected";
  } else if (filter === "active") {
    classNamesActive = "selected";
  } else if (filter === "done") {
    classNamesDone = "selected";
  }

  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className={classNamesAll}
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
          className={classNamesActive}
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
          className={classNamesDone}
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

export default TasksFilter;
