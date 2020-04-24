import React from 'react';
import './todolist.styles.scss';

function TodoList(props) {
  const { toDolist, removeItem } = props;
console.log(toDolist)
  if (toDolist.length === 0) {
    return (
      <div className="todoContainer">
        <div className="cardList">
          <h2>Add New Todo...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="todoContainer">
      <div className="cardList">
        <ul className="listItem">
          {/* map items from props */}
          {toDolist.map((item, index) => (
            <div key={index} className="item">
              <input
                type="checkbox"
                id={index}
                name={item.description}
                value={item.description}
              />
              <label> {item.description}</label> <span>{item.created_at}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
