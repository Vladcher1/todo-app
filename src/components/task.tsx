import React from "react";
import { formatDistanceToNow } from "date-fns";

import Timer from "./timer";

export default class Task extends React.Component {
  state = {
    running: false,
  };

  // componentDidMount() {
  //   const { time }: any = this.props;
  //   this.distanceToNow = setInterval(
  //     () => formatDistanceToNow(time, { includeSeconds: true }),
  //     1000
  //   );
  // }

  // formatDistanceToNow(time, { includeSeconds: true })
  // componentWillUnmount() {
  //   clearInterval(this.distanceToNow);
  // }

  toggleRunning = () => {
    const { running } = this.state;
    this.setState({
      running: !running,
    });
  };

  render() {
    const { label, done, onDeleted, onCompleted, time, id }: any = this.props;
    const { running }: any = this.state;

    // console.log(this.distanceToNow);
    let classNames = "";
    const check = done ? (classNames += " completed ") : (classNames = "");
    const showPlay = !running ? (
      <button
        className="icon icon-play"
        type="button"
        aria-label="start timer"
        onClick={() => this.toggleRunning()}
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
            <span className="description title">
              {label}
              {showStopwatch}
              <Timer running={running} />
            </span>
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
}
