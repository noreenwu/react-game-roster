import React from 'react'
import PropTypes from 'prop-types'

const RegisteredPlayers = (props) => {

  	return(
	    <div className="player-list">
      		<h2 className="players">Registered Players</h2>
      		<div className="roster players-ordered-list">
      		  <ol>
         		{props.users.map((user, index) => <li key={index}>{user} <span class='ng'>{props.numGames[index]}</span> </li>)}
              </ol>
      		</div> 
		</div>
    )
}

RegisteredPlayers.propTypes = {
  users: PropTypes.array.isRequired,
  numGames: PropTypes.array.isRequired  
}


export default RegisteredPlayers