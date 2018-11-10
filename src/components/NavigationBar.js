import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

function isActiveRout(rout){
  return window.location.pathname === rout.path
}

const NavigationBar = (props) => {
  return (
    <header>
      <div className="container">
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {props.routes.map(rout => (
                <li className={classnames({'nav-item':true, 'active': isActiveRout(rout) })} key={rout.path}>
                  {/* //TODO: make correct type convertion */}
                  <Link exact={rout.isExact ? 'true':''} className='nav-link' key={rout.path} to={rout.path}>
                    {rout.name}
                    {rout.isDefaultPage ? <span className="sr-only" key={rout.path}>(current)</span> : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

NavigationBar.propTypes = {
  routs: PropTypes.array,
}

export default NavigationBar