import React from 'react';
import './navbar.styles.scss';

function NavBar() {
  return (
    <div className="navbar">
      <h1>TODO LIST</h1>
      <div className="options">
        <form>
          <input type="text" name="email" placeholder="email" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </form>
        <button type ='submit'>Login</button>
      </div>
    </div>
  );
}

export default NavBar;
