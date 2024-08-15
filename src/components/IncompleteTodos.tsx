export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <section id="incomplete-area">
      <h2>TODO</h2>
      <ul id="incomplete-list">
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p>{todo}</p>
              <button className="finish" onClick={() => onClickComplete(index)}>
                Finish
              </button>
              <button className="delete" onClick={() => onClickDelete(index)}>
                x Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
