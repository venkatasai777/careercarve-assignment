import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBarContainer'>
      <div className='nav-left'>
        <Link className='logo' to={'/'}>
          Career Carve
        </Link>
      </div>
      <div className='nav-right'>
        <Link to={'/'} className='nav-options'>Home</Link>
        <Link to={'/book-a-slot'} className='nav-options'>Book a slot</Link>
      </div>
    </div>
  )
}

export default Navbar