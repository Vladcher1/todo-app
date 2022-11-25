/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/footer";
import NewTaskForm from "./components/new-task-form";
import TaskList from "./components/task-list";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

type Todo = { label: string; id: number; done: boolean; time: Date };
type State = { todoData: Todo[]; filter: string };

export default class App extends Component {
  maxId = 4;

  state: State = {
    todoData: [],
    filter: "all",
  };

  createTask = (label: string) => {
    const newDate = new Date();
    this.maxId += 1;
    return {
      label,
      id: this.maxId,
      done: false,
      time: newDate,
    };
  };

  addItem = (text: string) => {
    const newTask = this.createTask(text);
    this.setState(({ todoData }: State) => ({
      todoData: [...todoData, newTask],
    }));
  };

  filterChange = (name: string) => {
    this.setState(() => ({ filter: name }));
  };

  filterTasks = (todoData: Todo[], filter: string) => {
    if (filter === "active") {
      return todoData.filter((el: Todo) => !el.done);
    }
    if (filter === "done") {
      return todoData.filter((el: Todo) => el.done);
    }
    return todoData;
  };

  getUndone = () => {
    const { todoData } = this.state;
    return todoData.filter((el: Todo) => el.done === false).length;
  };

  deleteAllCompleted = () => {
    this.setState(({ todoData }: State) => {
      const completed = todoData.filter((el: Todo) => el.done !== true);
      return {
        todoData: completed.filter((el: Todo) => todoData.includes(el)),
      };
    });
  };

  deleteItem = (id: number) => {
    this.setState(({ todoData }: State) => ({
      todoData: todoData.filter((el: Todo) => el.id !== id),
    }));
  };

  completeItem = (id: number) => {
    const { todoData } = this.state;
    const newArray = todoData.map((el: Todo) => {
      const newEl = el;
      if (el.id === id) {
        newEl.done = !el.done;
        return newEl;
      }
      return newEl;
    });

    this.setState(() => ({ todoData: newArray }));

    this.getUndone();
  };

  render() {
    const { todoData, filter } = this.state;
    const visibleItems = this.filterTasks(todoData, filter);
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            // addItem={this.addItem}
            todoData={visibleItems}
            onDeleted={this.deleteItem}
            onCompleted={this.completeItem}
          />
          <Footer
            deleteAllCompleted={this.deleteAllCompleted}
            getUndone={this.getUndone}
            filterChange={this.filterChange}
          />
        </section>
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
