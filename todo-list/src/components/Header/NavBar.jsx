import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './navbar.styles.scss';

function NavBar(props) {
  const { logout, handleSubmit, currentUser } = props;

  return (
    <div className="navbar">
      <h1>MERN TODO LIST</h1>
      <div className="options">
        {currentUser === false && (
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

            {currentUser === false && <button type="submit">Login</button>}
          </form>
        )}
        {/* {currentUser === true && <span>Welcome!</span>} */}
        {currentUser === true && (
          <>
            {' '}
            <DropdownButton id="dropdown-basic-button" title="Welcome!">
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </DropdownButton>
            {/* <button onClick={logout}>Logout</button> */}
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
