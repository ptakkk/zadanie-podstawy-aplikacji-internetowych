import "./App.css";
import { useMemo, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import CreateTodoForm from "./CreateTodoForm";
import NoTodosAlert from "./NoTodosAlert";

function App() {
  const [todos, setTodos] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);

  const toggleIsFiltered = () => setIsFiltered(!isFiltered);

  const addTodo = (name) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name,
        done: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      return todo.id !== id
        ? todo
        : {
            ...todo,
            done: !todo.done,
          };
    });

    setTodos(newTodos);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const visibleTodos = !isFiltered ? todos : todos.filter((todo) => !todo.done);

  return (
    <main className="App">
      <h1>Lista zadań</h1>

      <TodoFilter
        totalLength={todos.length}
        isFiltered={isFiltered}
        onToggle={toggleIsFiltered}
      />

      <hr />

      {todos.length === 0 && <NoTodosAlert />} 

      {visibleTodos.length > 0 && (
        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}

      <hr />

      <CreateTodoForm onCreate={addTodo} />
    </main>
  );
}

export default App;
