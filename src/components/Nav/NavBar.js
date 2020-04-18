import React, { Component } from 'react'
import NavBarItem from './NavBarItem'
import {
  LOGIN_PATH,
  LOGOUT_PATH,
  SEARCH_PATH,
  SIGNUP_PATH,
  CART_PATH,
} from '../AppRoutes'

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarToggler'
              aria-controls='navbarToggler'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarToggler'>
              <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                <NavBarItem to={LOGIN_PATH} caption={'Login'} />
                <NavBarItem to={SIGNUP_PATH} caption={'Signup'} />
                <NavBarItem to={SEARCH_PATH} caption={'Search'} />
                <NavBarItem to={LOGOUT_PATH} caption={'Logout'} />
                <NavBarItem to={CART_PATH} caption={'Cart'} />
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default NavBar
