import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div id="incomplete-area">
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
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
