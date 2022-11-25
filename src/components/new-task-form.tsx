import React, { Component } from "react";

type tProps = {
  addItem: Function;
};
export default class NewTaskForm extends Component<tProps> {
  // constructor(props: tProps) {
  //   super(props);
  // }

  // static defaultProps = {
  //   addItem: () => {},
  // };

  state = { label: "" };

  inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ label: e.target.value });
  };

  submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: "" });
    const { addItem } = this.props;
    const cb = addItem;
    cb(label);
  };

  render(): React.ReactNode {
    const { label } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <input
          onChange={this.inputChange}
          value={label}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}
