import React, { ChangeEvent } from 'react'

import { DropDownLayout } from '.'

interface DropDownProps {
  id?: string
  caption?: string
  items: string[]
  name?: string
  onChange: (value: string) => void
}

export const DropDown = ({
  id,
  caption,
  items = [],
  name,
  onChange,
}: DropDownProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

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
