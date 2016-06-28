import React from 'react';

const SignIn = () => (
  <div>
    <h3 className="sign-in-form"> Please Sign In </h3>
    <form action="http://54.236.76.159/v1/auth/connect/google" method="get">
      <button type="submit"> Sigin with Google </button>
    </form>
    <form action="http://54.236.76.159/v1/auth/connect/google" method="get">
      <button type="submit"> Sigin with Facebook </button>
    </form>
  </div>
);

export default SignIn;
