import React, { useState } from 'react';
import './todolist.styles.scss';

function TodoList(props) {
  const { toDolist, removeItem } = props;
  const handleChange = (event) => {
    // event.target.className = 'hide';
    console.log(event.target.className);
  };
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
                <div
                  onClick={removeItem}
                  key={index}
                  className="item"
                  onChange={handleChange}
                >
                  <input
                    type="checkbox"
                    className="test"
                    id={index}
                    name={item}
                    value={item}
                  />
                  <label> {item}</label>{' '}
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList;
