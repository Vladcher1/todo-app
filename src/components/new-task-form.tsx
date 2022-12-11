import React, { Component } from "react";

import { tProps } from "../modules";

export default class NewTaskForm extends Component<tProps> {
  state = { label: "" };

  inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ label: e.target.value });
  };

  submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { label } = this.state;
    if (label.trim() !== "") {
      this.setState({ label: "" });
      const { addItem } = this.props;
      addItem(label);
    }
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
