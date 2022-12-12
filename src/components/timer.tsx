import React from "react";

class Timer extends React.Component<any, any> {
  timerID: any;

  constructor(props: any) {
    super(props);
    this.state = { time: 0 };
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let { time }: any = this.state;
    const { running }: any = this.props;
    if (running) {
      this.setState({
        time: (time += 1),
      });
    }
  }

  render() {
    const { time }: any = this.state;

    const stopwatch = new Date(0, 0, 0, 0, 0, time);
    return (
      <div>
        <span>{stopwatch.getMinutes()}:</span>
        <span>{stopwatch.getSeconds()}</span>
      </div>
    );
  }
}
export default Timer;
