import React from 'react';
import fire from '../utils/firebase';

function SignUp(props) {
  const { handleSubmit } = props;

  handleSubmit = (event) => {
    let user = {};
    event.preventDefault();
    user.email = event.target['email'].value;
    user.password = event.target['password'].value;
  };

  //create user on sign up
  const signup = (event) => {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(user).then((newUser) =>{
        console.log(newUser)
    }).catch((error) =>{
        console.log('error', error)
    })
  };
  return (
    <div>
      <h1>SignUp page</h1>
      <div className="options">
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter email address"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={password}
            required
          />
          <button type="submit">Sign Up Here!</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
