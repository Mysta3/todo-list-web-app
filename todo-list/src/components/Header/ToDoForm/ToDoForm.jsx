import React from 'react';
import './todoform.styles.scss';
function ToDoForm() {
    const handleSubmit = (event) =>{
        event.preventDefault(); //prevent page from reloading
        
    }
  return (
    <div className="todoForm">
      <form>
        <input name="description" placeholder="Add New Item"></input>
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default ToDoForm;
