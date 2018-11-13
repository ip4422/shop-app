import React, { Component } from 'react';
import NavBarItem from './NavBarItem'

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarToggler'>
              <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                <NavBarItem to={'/'} caption={'Home'} />
                <NavBarItem to={'/login'} caption={'Login'} />
                <NavBarItem to={'/signup'} caption={'Signup'} />
                <NavBarItem to={'/search'} caption={'Search'} />
                <NavBarItem to={'/logout'} caption={'Logout'} />
                <NavBarItem to={'/cart'} caption={'Cart'} />
              </ul>
            </div>
          </nav>
        </div>
      </header>

    );
  }
}

export default NavBar