import React, { Component } from 'react'

class Gmail extends Component{
  render(){
    return (
      <div>
        <h1> Please Sign In </h1>
        <form action="/v1/auth/connect/google" method="get">
        <button type='submit'> Sigin with Google </button>
        </form>
      </div>
    )
  }
}

export default Gmail
