import React from 'react';
import './todolist.styles.scss';

function TodoList(props) {
  const { toDolist, removeItem } = props;
 
  return (
    <>
      {/* //conditionally render page //if no todo's currently on page */}
      {toDolist.length === 0 && (
        <div className="todoContainer">
          <div className="cardList">
            <h2>Add New Todo...</h2>
          </div>
        </div>
      )}
      {/* //if todo's are currently on page */}
      {toDolist.length > 0 && (
        <div className="todoContainer">
          <div className="cardList">
            <ul className="listItem">
              {/* map items from props */}
              {toDolist.map((item, index) => (
                <div key={index} className="item">
                  <input
                    type="checkbox"
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
