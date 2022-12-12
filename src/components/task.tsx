import React from "react";
import { formatDistanceToNow } from "date-fns";

import Timer from "./timer";

export default class Task extends React.Component<any, any> {
  toggleRunning = () => {
    const { id, isRunningStopwatch }: any = this.props;
    isRunningStopwatch(id);
  };

  render() {
    const {
      label,
      done,
      onDeleted,
      onCompleted,
      time,
      id,
      running,
      isRunningStopwatch,
    }: any = this.props;
    let classNames = "";
    const check = done ? (classNames += " completed ") : (classNames = "");
    const showPlay = !running ? (
      <button
        className="icon icon-play"
        type="button"
        aria-label="start timer"
        onClick={isRunningStopwatch}
      />
    ) : null;

    const showPause = running ? (
      <button
        className="icon icon-pause"
        type="button"
        aria-label="stop timer"
        onClick={() => this.toggleRunning()}
      />
    ) : null;

    const showStopwatch = running ? showPause : showPlay;

    return (
      <li className={check}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={onCompleted}
            checked={done}
            id={id}
          />

          <label htmlFor={id}>
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
            onClick={onDeleted}
          />
        </div>
      </li>
    );
  }
}
