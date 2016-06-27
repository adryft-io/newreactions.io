import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <div>
        <form>
          <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
          <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}

export default Login;
