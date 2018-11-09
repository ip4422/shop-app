import React from 'react'
import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavigationBar = (props) => {
  return (
    <header>
      {props.routes.map(rout =>
        <NavLink exact={rout.isExact} activeClassName='active' key={rout.path} to={rout.path}>{rout.name}</NavLink>
      )}
    </header>
  )
}

NavigationBar.propTypes = {
  routs: PropTypes.array,
}

export default NavigationBar