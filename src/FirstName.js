import React from 'react'
import PropTypes from 'prop-types'

const FirstName = (props) => {

  	return(
           <input
           		type="text"
           		placeholder="New Player First Name"
            	value={props.value}
            	onChange={props.handleTextChange}     
           />
	)
}

FirstName.propTypes = {
  value: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default FirstName