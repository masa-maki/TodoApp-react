export const CompleteTodos = (props) => {
  const { todos, onClickRedo } = props;
  return (
    <section id="complete-area">
      <h2>DONE</h2>
      <ul id="complete-list">
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickRedo(index)}>Redo</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
