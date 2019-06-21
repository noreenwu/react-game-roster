import React from 'react'
import PropTypes from 'prop-types'

const DisplayMessages = (props) => {
  
  return(
    <div className="message">
       {props.message}
    </div>
  )
}

DisplayMessages.propTypes = {
  message: PropTypes.string.isRequired,
};

export default DisplayMessages