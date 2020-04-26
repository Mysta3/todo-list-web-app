import React, { useEffect, useState } from 'react';
import NavBar from './components/Header/NavBar';
import ToDoList from './components/ToDoList/TodoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import fire from './components/utils/firebase';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './App.scss';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const [userUID, setUserUID] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const url = 'http://localhost:3001/users/';
  let newLength = 0;

  //listen for state change of logged in user
  useEffect(() => {
    authListener(); // return currentState of the current user
    if (userUID === false) {
      console.log('no one is logged in');
    }
    if (userUID === true) {
      fetchData();
    }
  }, [currentUser, userUID]);

  //get current logged in user
  const authListener = () => {
    console.log('auth checker');
    fire.auth().onAuthStateChanged((user) => {
      //grab current user
      if (user) {
        //if currentUser is present
        setCurrentUser(true); //set currentUser to true
      } else {
        setCurrentUser(false); //else keep it false
      }
    });
  };

  const fetchData = (userUID) => {
    axios
      .get(`${url + userUID}`)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //grabs event.target.value and sets user
  const handleSubmit = (event) => {
    event.preventDefault();
    //set user state to value of inputbox in form
    setUser({
      email: event.target['email'].value,
      password: event.target['password'].value,
    });
    //login using Firebase Auth
    fire
      .auth()
      .signInWithEmailAndPassword(
        event.target['email'].value,
        event.target['password'].value
      )
      .then((validUser) => {
        console.log('UID:', validUser.user.uid);
        //setUID
        setUserUID(validUser.user.uid);
        fetchData(validUser.user.uid);
      })
      .then(() => {
        //change currentUser to true
        setCurrentUser(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });

    //empty field after submission
    event.target['email'].value = '';
    event.target['password'].value = '';
  };

  // firebase logout
  const logout = () => {
    fire.auth().signOut();
    setCurrentUser(false);
    setUser({
      email: '',
      password: '',
    });
    setUserUID(null);
    setTodoList([]);
  };

  ///add new item to array
  const addToDo = (event) => {
    event.preventDefault();
    //use event to target input value
    let newItem = event.target['todo'].value; //assign to variable for readability
    setTodoList((curArr) => [...curArr, newItem]); //update state by passing in oldstate of array to new start of array

    event.target['todo'].value = '';
    updateData(newItem);
  };

  const updateData = (newItem) => {
    let newList = [...todoList, newItem];
    axios
      .put(`${url + userUID}`, { list: newList })
      .then((updatedTodoList) => {
        console.log(updatedTodoList.data.list);
        setTodoList(updatedTodoList.data.list);
      })
      .catch((err) => {
        console.log(err.message, 'Something went wrong');
      });
  };

  // remove item from todo list
  const removeItem = (event) => {
    // event.preventDefault();
    event.target.className = 'hide';
    //target id
    let index = event.target.id;
    //search splice array using index
    todoList.splice(index, 1);
    console.log(todoList);

    //update list on backend
    axios
      .put(`${url + userUID}`, { list: todoList })
      .then((updatedList) => {
        console.log(updatedList.data.list);
        //update state
        setTodoList(updatedList.data.list);
      })
      .catch((err) => {
        console.log(err.message, 'Something went wrong');
      });
  };

  return (
    <Container fluid className="App">
      <NavBar
        currentUser={currentUser}
        handleSubmit={handleSubmit}
        logout={logout}
      />
      {currentUser ? (
        <>
          <h2>My Todo List</h2>
          <ToDoForm addToDo={addToDo} toDolist={todoList} />
          <ToDoList
            toDolist={todoList}
            removeItem={removeItem}
            newLength={newLength}
          />{' '}
        </>
      ) : (
        <h2>Login To See Todo List</h2>
      )}
    </Container>
  );
}

export default App;
