import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

class AddPlayer extends Component {
  
    state = {
        fname: '',
        lname: '',
        username: '',
        numGames: 0   
    }

    inputIsEmpty = () => {
      return ((this.state.fname ==='') || (this.state.lname ==='') || (this.state.username ===''))
    };

    handleFirstNameChange = (event) => {   
      this.setState(
        { fname: event.target.value }
      );
    }

    handleLastNameChange = (event) => {      
      this.setState(
        {lname: event.target.value}
      );
    }

    handleUsernameChange = (event) => {      
      this.setState(
        {username: event.target.value}
      );
    }

	handleInput(e) {
     let value = e.target.value;
     let name = e.target.name;
     this.setState( prevState => {
        return { 
           newUser : {
                    ...prevState.newUser, [name]: value
                   }
        }
     }, () => console.log(this.state.newUser)
     )
 	}
    addPlayer = event => {
      event.preventDefault();
      console.log("addPlayer");
      // check if username is already registered
      if (! this.props.alreadyRegistered(this.state.username)) {
      	this.props.onAddPlayer(this.state.username, this.state.numGames);
      }
    };

	render() {
      return (
        <div>
          <form onSubmit={this.addPlayer}>
           <Input
         		value={this.state.fname}
        		placeholder={'First Name'}
        		handleTextChange={this.handleFirstNameChange} 
			/>

           <Input
				value={this.state.lname}
           		placeholder={'Last Name'}
				handleTextChange={this.handleLastNameChange}
           />

           <Input
           		value={this.state.username}
				placeholder={'Username'}
				handleTextChange={this.handleUsernameChange}
           />

		   <button disabled={this.inputIsEmpty()}>Add</button>

           </form>          
        </div>
      )
    }
}

AddPlayer.propTypes = {
  onAddPlayer: PropTypes.func.isRequired,
  alreadyRegistered: PropTypes.func.isRequired
};
export default AddPlayer