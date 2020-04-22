import React from 'react';
import './todolist.styles.scss';


function TodoList(props) {
  const { toDolist, removeItem } = props;
  console.log(toDolist)
  return (
    <div className="todoContainer">
      <div className="cardList">
        <ul className="listItem">
            {/* map items from props */}
          {toDolist.map((item) => (
            <div key={item.id} className="item">
              <li>{item.description}</li> <span>{item.created_at}</span> <button onClick={removeItem}>X</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
