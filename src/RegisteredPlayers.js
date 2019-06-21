import React from 'react'
import PropTypes from 'prop-types'

const RegisteredPlayers = (props) => {

  	return(
	    <div className="player-list">
      		<h2 className="players">Registered Players</h2>
      		<ol className="players-ordered-list">
         		{props.users.map((user, index) => <li key={index}>{user}</li>)}
      		</ol>     
		</div>
    )
}

RegisteredPlayers.propTypes = {
  users: PropTypes.array.isRequired
}


export default RegisteredPlayers