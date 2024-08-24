import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-con'>
        <ul className='menu-options'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/ Book a slot'}></Link>
            </li>
            <li>All mentor</li>
            <li>Help</li>
        </ul>
    </div>
  )
}

export default Sidebar