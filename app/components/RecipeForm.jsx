import React, { Component } from 'react'

class RecipeForm extends Component{
  render(){
    return (
      <div>
        <h1> Sign Up! </h1>
        <form action="/v1/recipes" method="post">
        <input></input>
        </form>
      </div>
    )
  }
}

export default RecipeForm
