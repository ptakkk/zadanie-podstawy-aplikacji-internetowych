import TodoItem from "./TodoItem";

import "./TodoList.css";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
