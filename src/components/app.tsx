import React, { Component } from "react";

import { Todo, State } from "../modules";

import FooterTodo from "./footer";
import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";

export default class App extends Component {
  static filterTasks = (todoData: Todo[], filter: string) => {
    if (filter === "active") {
      return todoData.filter((el: Todo) => !el.done);
    }
    if (filter === "done") {
      return todoData.filter((el: Todo) => el.done);
    }
    return todoData;
  };

  maxId = 4;

  state: State = {
    todoData: [],
    filter: "all",
  };

  createTask = (label: string) => ({
    label,
    id: this.maxId++,
    done: false,
    time: new Date(),
    running: false,
  });

  addItem = (text: string) => {
    const newTask = this.createTask(text);
    this.setState(({ todoData }: State) => ({
      todoData: [...todoData, newTask],
    }));
  };

  filterChange = (name: string) => {
    this.setState(() => ({ filter: name }));
  };

  getUndone = () => {
    const { todoData } = this.state;
    return todoData.filter((el: Todo) => el.done === false).length;
  };

  deleteAllCompleted = () => {
    this.setState(({ todoData }: State) => {
      const completed = todoData.filter(
        (el: Todo) => el.done !== true && todoData.includes(el)
      );
      return {
        todoData: completed,
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
        newEl.running = false;
      }
      return newEl;
    });

    this.setState(() => ({ todoData: newArray }));
  };

  isRunningStopwatch = (id: number) => {
    const { todoData } = this.state;

    const newArray = todoData.map((el: Todo) => {
      const newEl = el;
      if (el.id === id) {
        newEl.running = !newEl.running;
      }
      return newEl;
    });

    this.setState(() => ({ todoData: newArray }));
  };

  render() {
    const { todoData, filter } = this.state;
    const visibleItems = App.filterTasks(todoData, filter);
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todoData={visibleItems}
            onDeleted={this.deleteItem}
            onCompleted={this.completeItem}
            isRunningStopwatch={this.isRunningStopwatch}
          />
          <FooterTodo
            deleteAllCompleted={this.deleteAllCompleted}
            getUndone={this.getUndone()}
            filterChange={this.filterChange}
            filter={filter}
          />
        </section>
      </div>
    );
  }
}
