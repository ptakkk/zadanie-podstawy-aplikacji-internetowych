import "./TodoItem.css";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const id = `${todo.id}_done`;

  return (
    <li key={todo.id} className="TodoItem">
      <input
        id={id}
        type="checkbox"
        defaultChecked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <label htmlFor={id} className={todo.done ? "done" : undefined}>
        {todo.name}
      </label>

      <button type="button" onClick={() => onDelete(todo.id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
