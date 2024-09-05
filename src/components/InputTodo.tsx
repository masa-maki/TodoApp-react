export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <section>
      <div id="input-area">
        <input
          id="add-text"
          placeholder="Input TODO"
          value={todoText}
          onChange={onChange}
          disabled={disabled}
        />
        <button id="add-button" onClick={onClick} disabled={disabled}>
          ADD
        </button>
      </div>
    </section>
  );
};
