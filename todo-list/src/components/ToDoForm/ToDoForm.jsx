import React from 'react';
import './todoform.styles.scss';
function ToDoForm(props) {
  const {handleSubmit} = props
  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <input name="description" placeholder="Add New Item"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoForm;
