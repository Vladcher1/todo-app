import React from "react";
import { render } from "react-dom";
import { checkServerIdentity } from "tls";
import { setConstantValue } from "typescript";
import { formatDistanceToNow, subDays } from "date-fns";

type Props = {
  label: string;
  done: boolean;
  onDeleted: any;
  onCompleted: any;
  time: Date;
  id: number;
};

const Task = ({ label, done, onDeleted, onCompleted, time, id }: Props) => {
  let classNames = "";
  if (done) {
    classNames += " completed";
  }
  return (
    <li key={id} className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={onCompleted}
          checked={done}></input>

        <label htmlFor="toggle">
          <span className="description" onClick={onCompleted}>
            {label}
          </span>
          <span className="created">
            {formatDistanceToNow(time, { includeSeconds: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    </li>
  );
};

Task.defaultProps = {
  label: "",
  Done: false,
  onCompleted: () => {},
  onDeleted: () => {},
  time: new Date(),
  id: 0,
};

export default Task;
