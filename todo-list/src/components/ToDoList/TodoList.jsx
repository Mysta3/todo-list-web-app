import React from 'react';
import './todolist.styles.scss';

function TodoList(props) {
  const { toDolist, removeItem } = props;
  return (
    <>
      {/* //conditionally render page //if no todo's currently on page */}
      {toDolist.length === 0 && (
        <div className="todoContainer">
          <h2>Add New Todo...</h2>
          <div className="cardList"></div>
        </div>
      )}
      {/* //if todo's are currently on page */}
      {toDolist.length > 0 && (
        <div className="todoContainer">
          <div className="cardList">
            <ul className="listItem">
              {/* map items from props */}
              {toDolist.map((item, index) => (
                <li
                  onClick={removeItem}
                  key={index}
                  className="item"
                  name={item}
                  id={index}
                  value={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList;
