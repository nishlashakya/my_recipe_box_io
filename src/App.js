import React, { Component } from 'react';
import Login from './login';
import Header from './header';
import RecipeCollection from './recipeCollection';
import Ingredients from './ingredients';
import AddRecipe from './addRecipe';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
		<Login/>
      </div>
    );
  }
}

export default App;
