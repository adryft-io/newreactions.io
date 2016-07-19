import React from 'react';

const SignIn = () => (
  <div className="container componentContainer">
    <div className="signin">
      <form action="api/v1/auth/connect/google" method="get">
        <button type="submit"> Sign in with Google </button>
      </form>
    </div>
  </div>
);

export default SignIn;
