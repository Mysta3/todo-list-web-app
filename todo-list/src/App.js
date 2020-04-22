import React, { Component } from 'react';
import NavBar from './components/Header/NavBar'
import ToDoList from './components/ToDoList/TodoList'
import ToDoForm from './components/ToDoForm/ToDoForm'
// import list from './seed.json'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      todoList: [
        {
          id: 0,
          description: 'Learn React Native',
          created_at: '04-21-2020',
        },
        {
          id: 1,
          description: 'Pick Birthday gift for Wife',
          created_at: '04-21-2020',
        },
      ],
    };
    this.handleSubmit = (event) => {
      event.preventDefault(); //prevent page from reloading
      let data = {};
      data.id = 3;
      data.description = event.target['description'].value;
      data.created_at = "04-23-2020";
      console.log(data);
      this.setState({todoList: this.state.todoList.concat(data)})
      event.target['description'].value = '';
    };

    this.removeItem = (event) =>{
      event.preventDefault(); 
      console.log(event.target)
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>My Todo List</h1>
        <ToDoForm handleSubmit={this.handleSubmit} />
        <ToDoList toDolist={this.state.todoList} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
