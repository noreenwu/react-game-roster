import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisteredPlayers from './RegisteredPlayers'
import AddPlayer from './AddPlayer'
import DisplayMessages from './DisplayMessages'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
    numGames: [],
    errorMsg: ''
  }

  addPlayer = (newuser, numgames) => {
    this.setState(oldState => ({
      users: [...oldState.users, newuser],
      numGames: [...oldState.numGames, numgames]
    }));
  };

  alreadyRegistered = (newuser) => {
    console.log("already registered?");
    for (let u of this.state.users) {
      if (newuser === u) {
        // set an error message to be displayed by DisplayMessages
        this.setState({
          errorMsg: 'That username is already registered.'
        });
                   
        return true;
      }
    }
    this.setState({
      errorMsg: ''
    });    
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		  <div>
			<h2>Add Players</h2>
  			<AddPlayer onAddPlayer={this.addPlayer} alreadyRegistered={this.alreadyRegistered}/>
		</div>
		<DisplayMessages message={this.state.errorMsg}/>
		<RegisteredPlayers users={this.state.users} numGames={this.state.numGames}/>
      </div>
    );
  }
}

export default App;
