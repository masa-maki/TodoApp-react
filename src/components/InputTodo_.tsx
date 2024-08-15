export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <section id="input-area">
      <input
        id="add-text"
        placeholder="Input TODO"
        value={todoText}
        onChange={onChange}
      />
      <button id="add-button" onClick={onClick}>
        ADD
      </button>
    </section>
  );
};
