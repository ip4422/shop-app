import React from 'react'
import { Link } from 'react-router-dom'

import { INavBarItemProps } from '../types'

export const NavBarItem = ({
  to = '',
  caption,
}: INavBarItemProps): JSX.Element => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={to}>
        {caption}
      </Link>
    </li>
  )
}
