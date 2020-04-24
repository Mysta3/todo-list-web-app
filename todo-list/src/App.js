import React, { useEffect, useState } from 'react';
import NavBar from './components/Header/NavBar';
import ToDoList from './components/ToDoList/TodoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import fire from './components/utils/firebase';
import axios from 'axios';
import './App.scss';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const [userUID, setUserUID] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const url = 'http://localhost:3001/users/';

  //listen for state change
  useEffect(() => {
    authListener(); // return currentState of the current user
  }, [currentUser]);

  //get current logged in user
  const authListener = () => {
    console.log('auth checker');
    let user = fire.auth().currentUser; //grab current user
    if (user) {
      //if currentUser is present
      setCurrentUser(true); //set currentUser to true
    } else {
      setCurrentUser(false); //else keep it false
    }
  };

  const fetchData = (userUID) => {
    // console.log(`${url + userUID}`)
    axios
      .get(`${url + userUID}`)
      .then((res) => {
        // console.log(res.data);
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
        fetchData(validUser.user.uid)
      })
      .then(() => {
        //change currentUser to true
        setCurrentUser(true);
      })
      .catch((err) => {
        console.log(err);
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

  // Add Todo item
  // const handleSubmit = (event) => {
  //   event.preventDefault(); //prevent page from reloading
  //   let data = {};
  //   data.description = event.target['description'].value;
  //   console.log(data);
  //   //post to backend
  //   // postData(data)
  //   event.target['description'].value = '';
  // };

  // const postData = (data) => {
  //   axios.post(`${url + user.email}`);
  // };
  // remove item from todo list
  // const removeItem = (event) => {
  //   event.preventDefault();
  //   console.log(event.target)
  // }

  return (
    <div className='App'>
      <NavBar
        setUserUID={setUserUID}
        setCurrentUser={setCurrentUser}
        handleSubmit={handleSubmit}
        logout={logout}
        user={user}
        setUser={setUser}
        userUID={userUID}
      />
      {currentUser ? <h1>My Todo List</h1> : <h1>Login To See Todo List</h1>}
      <ToDoForm handleSubmit={handleSubmit} />
      <ToDoList toDolist={todoList} />
    </div>
  );
}

export default App;
