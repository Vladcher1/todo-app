import React, { useState, useRef } from "react";

import { Todo } from "../modules";

import FooterTodo from "./footer";
import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";
import TasksFilter from "./tasks-filter";

const App: React.FC = () => {
  const [todoData, setTodoData]: any = useState([]);
  const [filter, setFilter] = useState("all");

  const maxId = useRef(1);

  const filterTasks = () => {
    if (filter === "active") {
      return todoData.filter((el: Todo) => !el.done);
    }
    if (filter === "done") {
      return todoData.filter((el: Todo) => el.done);
    }
    return todoData;
  };

  const createTask = (label: Pick<Todo, "label">) => ({
    label,
    id: maxId.current++,
    done: false,
    time: new Date(),
    running: false,
  });

  const addItem = (text: Pick<Todo, "label">) => {
    const newTask = createTask(text);

    setTodoData((prevtodoData: any) => [...prevtodoData, newTask]);
  };

  const filterChange = (name: string) => {
    setFilter(name);
  };

  const getUndone = () => todoData.filter((el: Todo) => !el.done).length;

  const deleteAllCompleted = () => {
    setTodoData((preTodoData: Todo[]) =>
      preTodoData.filter((el: Todo) => el.done !== true)
    );
  };

  const deleteItem = (id: number) => {
    setTodoData((prevTodoData: Todo[]) =>
      prevTodoData.filter((el: Todo) => el.id !== id)
    );
  };

  const completeItem = (id: number) => {
    const newArray = todoData.map((el: Todo) => {
      if (el.id === id) {
        el.done = !el.done;
        el.running = false;
      }
      return el;
    });

    setTodoData(newArray);
  };

  const isRunningStopwatch = (id: number) => {
    const newArray = todoData.map((el: Todo) => {
      const newEl = el;
      if (el.id === id) {
        newEl.running = !newEl.running;
      }
      return newEl;
    });
    setTodoData(newArray);
  };

  const visibleItems = filterTasks();

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addItem={addItem} />
      </header>
      <section className="main">
        <TaskList
          todoData={visibleItems}
          onDeleted={deleteItem}
          onCompleted={completeItem}
          isRunningStopwatch={isRunningStopwatch}
        />
        <FooterTodo
          deleteAllCompleted={deleteAllCompleted}
          getUndone={getUndone()}
        >
          <TasksFilter filter={filter} filterChange={filterChange} />
        </FooterTodo>
      </section>
    </div>
  );
};
export default App;
