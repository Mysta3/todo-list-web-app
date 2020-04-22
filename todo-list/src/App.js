import React, { Component } from 'react';
import NavBar from './components/Header/NavBar'
import ToDoList from './components/ToDoList/TodoList'
import list from './seed.json'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      todoList: list,
    };
  }
  render() {
    return (
      <div>
        <NavBar />
       <ToDoList list={this.state.todoList} />
      </div>
    );
  }
}

export default App;
