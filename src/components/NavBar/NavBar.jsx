import React from 'react'
import PropTypes from 'prop-types'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

const NavBar = props => {
  return (
    <div className='navbar__component' >
        <header className='navbar'>
            <ul>
                <li> <a href="#">categoria 1 </a></li>
                <li> <a href="#">categoria 2 </a></li>
                <li> <a href="#">categoria 3 </a></li>
            </ul>
            <CartWidget
              numero={5}
            />
        </header>
    </div>
  )
}

NavBar.propTypes = {}

export default NavBar