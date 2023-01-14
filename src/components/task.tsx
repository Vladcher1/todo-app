import React from "react";
import { formatDistanceToNow } from "date-fns";

import { TaskProps } from "../modules";

import Timer from "./timer";

const Task: React.FC<
  Pick<
    TaskProps,
    | "id"
    | "label"
    | "done"
    | "onCompleted"
    | "onDeleted"
    | "time"
    | "running"
    | "isRunningStopwatch"
  >
> = ({
  label,
  done,
  onDeleted,
  onCompleted,
  time,
  id,
  running,
  isRunningStopwatch,
}) => {
  let classNames = "";
  const check = done ? (classNames += " completed ") : (classNames = "");
  const showPlay = !running && (
    <button
      className="icon icon-play"
      type="button"
      aria-label="start timer"
      onClick={() => isRunningStopwatch()}
    />
  );

  const showPause = running && (
    <button
      className="icon icon-pause"
      type="button"
      aria-label="stop timer"
      onClick={() => isRunningStopwatch(id)}
    />
  );

  const showStopwatch = running ? showPause : showPlay;
  const deleteOnChange = () => {
    onCompleted(id);
  };
  const completeOnChange = () => {
    onDeleted(id);
  };

  return (
    <li className={check}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={deleteOnChange}
          checked={done}
          id={String(id)}
        />

        <label htmlFor={String(id)}>
          <span className="title">{label}</span>
          <span className="description">
            {showStopwatch}
            <Timer running={running} />
          </span>

          <span className="description created">
            {formatDistanceToNow(time, { includeSeconds: true })}
          </span>
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" />
        <button
          aria-label="delete"
          type="button"
          className="icon icon-destroy"
          onClick={completeOnChange}
        />
      </div>
    </li>
  );
};

export default Task;
