import React from 'react';
import './todoform.styles.scss';
function ToDoForm(props) {
  const { addToDo } = props;

  return (
    <div className="todoForm">
      <form onSubmit={addToDo}>
        <input name="todo" placeholder="Add New Item"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoForm;
