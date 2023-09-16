import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd,showAdd}) => {

  const location = useLocation();

  return (
    <>
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            {/* <button className="btn">Add</button> */}
        </header>
    </>
  )
}

// Header.PropTypes = {
//     title: PropTypes.string.isRequired,
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
