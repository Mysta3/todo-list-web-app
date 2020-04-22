import React from 'react';
import './todolist.styles.scss';
import ToDoForm from '../Header/ToDoForm/ToDoForm';

function TodoList(props) {
  const { list } = props;
  return (
    <div className="todoContainer">
      <h1>My Todo List</h1>
      <ToDoForm />
      <div className="cardList">
        <ul className="listItem">
          {/* implement map method here */}
          <div className="item">
            <li>{list[0].description}</li> <span>{list[0].created_at}</span>
          </div>
          <div className="item">
            <li>{list[1].description}</li> <span>{list[1].created_at}</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
