import React from "react";

import { Props } from "../modules";

import TasksFilter from "./tasks-filter";

function Footer(props: any) {
  const { children } = props;
  return <footer className="footer">{children}</footer>;
}

function FooterTodo({
  deleteAllCompleted,
  getUndone,
  filterChange,
  filter,
}: Props) {
  return (
    <Footer>
      <span className="todo-count">
        {getUndone} {getUndone === 1 ? "item" : "items"} left
      </span>
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
    </Footer>
  );
}

export default FooterTodo;
