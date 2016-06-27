import React from 'react';

const Gmail = () =>
  (
  <div>
    <h1> Please Sign In </h1>
    <form action="http://54.236.76.159/v1/auth/connect/google" method="get">
      <button type="submit"> Sigin with Google </button>
    </form>
  </div>
  );

export default Gmail;
