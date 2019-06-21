import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {

  	return(
           <input
           		type="text"
           		placeholder={props.placeholder}
            	value={props.value}
            	onChange={props.handleTextChange}     
           />
	)
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default Input