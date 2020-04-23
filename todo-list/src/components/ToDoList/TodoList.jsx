import React from 'react';
import './todolist.styles.scss';

function TodoList(props) {
  const { toDolist, removeItem } = props;
  console.log(toDolist);
  return (
    <div className="todoContainer">
      <div className="cardList">
        <ul className="listItem">
          {/* map items from props */}
          {toDolist.map((item) => (
            <div key={item.id} className="item">
              <input
                type="checkbox"
                id={item.id}
                name={item.description}
                value={item.description}
              />
              <label for={item.id}> {item.description}</label>{' '}
              <span>{item.created_at}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
