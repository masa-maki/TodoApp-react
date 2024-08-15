const style = {
  backgroundColor: '#c6e5d9',
  width: '90%',
  borderRadius: '1rem',
  margin: '1rem auto',
  padding: '1rem',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <section style={style}>
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
    </section>
  );
};
