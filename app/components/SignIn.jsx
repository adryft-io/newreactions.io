import React from 'react';

const SignIn = () => (
  <div>
    <h3 className="sign-in-form"> Please Sign In </h3>
    <form action="api/v1/auth/connect/google" method="get">
      <button type="submit"> Sign in with Google </button>
    </form>
    <form action="api/v1/auth/connect/google" method="get">
      <button type="submit"> Sign in with Facebook </button>
    </form>
  </div>
);

export default SignIn;
