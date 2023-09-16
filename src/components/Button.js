import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text, onClick,showAdd}) => {

    // const onClick = () =>{
    //     console.log('clicked...');
    // }

  return (
    <>
        <button onClick={onClick} className="btn" style={{backgroundColor:color}}>{text}</button>
    </>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
