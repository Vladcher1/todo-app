// import { checkServerIdentity } from "tls";
import React from "react";
// import { render } from "react-dom";
// import { setConstantValue } from "typescript";
import { formatDistanceToNow } from "date-fns";

export type tProps = {
  label: string;
  done: boolean;
  onDeleted: any;
  onCompleted: any;
  time: Date;
  id: any;
};

function Task({ label, done, onDeleted, onCompleted, time, id }: tProps) {
  let classNames = "";
  if (done) {
    classNames += " completed";
  }
  return (
    <li className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={onCompleted}
          checked={done}
          id={id}
        />

        <label htmlFor={id}>
          <span className="description">{label}</span>
          <span className="created">
            {formatDistanceToNow(time, { includeSeconds: true })}
          </span>
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" />
        <button
          aria-label="delete"
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
        />
      </div>
    </li>
  );
}

export default Task;
