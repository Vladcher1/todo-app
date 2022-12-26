import React, { useState } from "react";

import { Todo } from "../modules";

import FooterTodo from "./footer";
import NewTaskForm from "./new-task-form";
import TaskList from "./task-list";

let maxId = 1;
const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState("all");

  const filterTasks = () => {
    if (filter === "active") {
      return todoData.filter((el: Todo) => !el.done);
    }
    if (filter === "done") {
      return todoData.filter((el: Todo) => el.done);
    }
    return todoData;
  };

  // useEffect(() => {}, []);

  const createTask = (label: string) => ({
    label,
    id: maxId++,
    done: false,
    time: new Date(),
    running: false,
  });

  const addItem = (text: string) => {
    const newTask = createTask(text);

    setTodoData([...todoData, newTask]);
  };

  const filterChange = (name: string) => {
    setFilter(name);
  };

  const getUndone = () => {
    const count = todoData.filter((el: Todo) => el.done === false).length;
    return count;
  };

  const deleteAllCompleted = () => {
    setTodoData(
      todoData.filter((el: Todo) => el.done !== true && todoData.includes(el))
    );
  };

  const deleteItem = (id: number) => {
    setTodoData(todoData.filter((el: Todo) => el.id !== id));
  };

  const completeItem = (id: number) => {
    const newArray = todoData.map((el: Todo) => {
      const newEl = el;
      if (el.id === id) {
        newEl.done = !el.done;
        newEl.running = false;
      }
      return newEl;
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
          filterChange={filterChange}
          filter={filter}
        />
      </section>
    </div>
  );
};
export default App;
