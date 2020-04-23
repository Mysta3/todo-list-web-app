import React from 'react';
import './navbar.styles.scss';

function NavBar(props) {
  let { email, password } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    email = event.target['email'].value;
    password = event.target['password'].value;
    console.log(email, password);
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
            placeholder="Enter email"
            value={email}
            required
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
