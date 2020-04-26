import React from 'react';
import fire from '../utils/firebase';

function SignUp(props) {
  const { handleSignUp } = props;

  return (
    <div>
      <h1>SignUp page</h1>
      <div className="options">
        <form>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter email address"
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
          <button type="submit">Sign Up Here!</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
