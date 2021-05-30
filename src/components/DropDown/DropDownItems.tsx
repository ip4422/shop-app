import React from 'react'

import { DropDownItem } from './DropDownItem'
import { IDropDownItemsProps } from '../types'

export const DropDownItems = ({
  id,
  name,
  items = [],
  onChange,
}: IDropDownItemsProps): JSX.Element => {
  return (
    <select
      className='custom-select form-control'
      name={name}
      onChange={onChange}
      id={id}
    >
      {items &&
        items.map(value => (
          <DropDownItem value={value} key={`dd-item-key-${value}`} />
        ))}
    </select>
  )
}
