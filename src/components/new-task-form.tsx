import React from "react";

type tProps = {
  addItem: Function
}
export default class NewTaskForm extends React.Component<any, any> {
  constructor(props: tProps) {
    super(props);
  }

  state = {
    label: "",
  };

  inputChange = (e: any) => {
    this.setState({
      label: e.target.value,
    });
  };

  submitForm = (e: any) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: "" });
    const cb = this.props.addItem || (() => {});
    cb(label);
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.submitForm}>
        <input
          onChange={this.inputChange}
          value={this.state.label}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus></input>
      </form>
    );
  }

  static defaultProps = {
    addItem: () => { }
  };
}
