import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class NavBarItem extends Component {
  render() {
    const { to, caption } = this.props
    return (
      <li className='nav-item'>
        <Link className='nav-link' to={to}>
          {caption}
        </Link>
      </li>
    )
  }
}

NavBarItem.propTypes = {
  to: PropTypes.string,
  caption: PropTypes.string,
}
