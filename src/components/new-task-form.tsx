import React, { useState } from "react";

import { Props } from "../modules";

const NewTaskForm: React.FC<Pick<Props, "addItem">> = ({ addItem }) => {
  const [label, setLabel] = useState("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (label.trim() !== "") {
      setLabel("");
      addItem(label);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <input
        onChange={inputChange}
        value={label}
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default NewTaskForm;
