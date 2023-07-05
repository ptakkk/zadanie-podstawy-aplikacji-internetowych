const TodoFilter = ({ isFiltered, onToggle }) => (
  <div>
    Tylko niewykonane:{" "}
    <input
      name="isFiltered"
      type="checkbox"
      defaultChecked={isFiltered}
      onChange={onToggle}
    />
  </div>
);

export default TodoFilter;
