import React from 'react'
import { Link } from 'react-router-dom'

interface NavBarItemProps {
  to?: string
  caption?: string
}

export const NavBarItem = ({
  to = '',
  caption,
}: NavBarItemProps): JSX.Element => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={to}>
        {caption}
      </Link>
    </li>
  )
}
