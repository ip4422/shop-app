import React, { ChangeEventHandler } from 'react'

import { DropDownItem } from './DropDownItem'

interface DropDownItemsProps {
  id?: string
  name?: string
  items: string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export const DropDownItems = ({
  id,
  name,
  items = [],
  onChange,
}: DropDownItemsProps): JSX.Element => {
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
