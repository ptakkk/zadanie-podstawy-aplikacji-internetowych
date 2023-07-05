import { useCallback, useState } from "react";

import "./CreateTodoForm.css";

const CreateTodoForm = ({ onCreate }) => {
  const [name, setName] = useState("");

  const handleSubmit = 
    (event) => {
      event.preventDefault();

      if (!name) {
        return;
      }

      onCreate(name);
      setName("");
    }

  return (
    <form className="CreateTodoForm" onSubmit={handleSubmit}>
      <p>Dodaj nowe zadanie</p>

      <div className="CreateTodoForm_flex">
        <input
          required
          name="new-todo-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button>+</button>
      </div>
    </form>
  );
};

export default CreateTodoForm;
