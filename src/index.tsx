import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import NewTaskForm from "./components/new-task-form";
import TaskList from "./components/task-list";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

type Todo = { label: string; id: number; done: boolean; time: Date};
type State = { todoData: Todo[]; filter: string };

export default class App extends Component {
  
  maxId: number = 4;
  createTask = (label: string) => {
    return {
      label,
      id: this.maxId++,
      done: false,
      time: new Date()
    };
  };

  state: State = {
    todoData: [
      this.createTask("Completed task"),
      this.createTask("Editing task"),
      this.createTask("Active task"),
    ],
    filter: "all",
  };

  addItem = (text: string) => {
    const newTask = this.createTask(text);
    this.setState(({ todoData }:any) => {
      return { todoData: [...todoData, newTask] };
    });
  };

  filterChange = (name: string) => {
    this.setState(() => {
      return { filter: name };
    });
  };

  filterTasks = (todoData: Todo[], filter:string) => {
    if (filter === "active") {
      return todoData.filter((el: any) => !el.done);
    }
    if (filter === "done") {
      return todoData.filter((el: any) => el.done);
    }
    if (filter === "all") {
      return todoData.filter((el: any) => el);
    }
  };

  getUndone = () => {
   return this.state.todoData.filter((el: any) => el.done === false).length;
  };

  deleteAllCompleted = () => {
    this.setState(({ todoData }: any) => {
      const completed = todoData.filter((el: any) => {
        return el.done !== true;
      });
      return {
        todoData: completed.filter((el: any) => todoData.includes(el)),
      };
    });
  };

  deleteItem = (id: number) => {
    this.setState(({ todoData }: any) => {
      return {
        todoData: todoData.filter((el: any) => el.id !== id),
      };
    });
  };

  completeItem = (id: number) => {
    const newArray = this.state.todoData.map((el: any) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      }
      return el;
    });

    this.setState(() => {
      return {
        todoData: newArray,
      };
    });

    this.getUndone();
  };


  render() {
    const visibleItems = this.filterTasks(
      this.state.todoData,
      this.state.filter
    );
    return (
      <div className="todoapp">
        <header className="header">
          <h1>
            todos
          </h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todoData={visibleItems}
            onDeleted={this.deleteItem}
            onCompleted={this.completeItem}
          />
          <Footer
            deleteAllCompleted={this.deleteAllCompleted}
            getUndone={this.getUndone}
            filterTasks={this.filterTasks}
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
