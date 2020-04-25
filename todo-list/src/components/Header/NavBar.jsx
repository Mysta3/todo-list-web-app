import React from 'react';
import './navbar.styles.scss';


function NavBar(props) {
  const { logout, handleSubmit } = props;

  
  //firebase signup
  const signup = (event) => {
    event.preventDefault();
    // setUser({
    //   email: data.email,
    //   password: data.password,
    // });

    // fire
    //   .auth()
    //   .createUserWithEmailAndPassword(
    //     newUser.email,
    //     newUser.password
    //   )
    //   .then((newUser) => {
    //     setCurrentUser(true);
    //     console.log(newUser);
    //     //call post new user to backend
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="navbar">
      <h1>TODO LIST</h1>
      <div className="options">
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter email address"
            required
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            required
          />

          {/* {currentUser === false && ( */}
          <div>
            <button type="submit">Login</button>{' '}
            <button onClick={signup}>Sign Up</button>
          </div>
          {/* )} */}
        </form>
        {/* {currentUser === true &&  */}
        <button onClick={logout}>Logout</button>
        {/* } */}
      </div>
    </div>
  );
}

export default NavBar;
