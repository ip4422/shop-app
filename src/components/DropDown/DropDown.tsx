import React, { ChangeEvent } from 'react'
// import PropTypes from 'prop-types'

import { DropDownLayout } from '.'
import { IDropDownProps } from '../types'

export const DropDown = ({
  id,
  caption,
  items = [],
  name,
  onChange,
}: IDropDownProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  // const { id, caption, items, name } = this.props
  return (
    <DropDownLayout
      id={id}
      caption={caption}
      items={items}
      name={name}
      onChange={handleChange}
    />
  )
}

// DropDown.propTypes = {
//   id: PropTypes.string,
//   caption: PropTypes.string,
//   items: PropTypes.array.isRequired,
//   name: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// }
