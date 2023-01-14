import React from "react";

import { Props, Children } from "../modules";

const FooterTodo: React.FC<
  Pick<Props, "deleteAllCompleted" | "getUndone"> & Children
> = ({ deleteAllCompleted, getUndone, children }) => (
  <footer className="footer">
    <span className="todo-count">
      {getUndone} {getUndone === 1 ? "item" : "items"} left
    </span>
    {children}
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

export default FooterTodo;
