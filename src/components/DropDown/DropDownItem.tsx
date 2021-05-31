import React from 'react'

interface DropDownItemProps {
  value?: string
}

export const DropDownItem = ({
  value = '',
}: DropDownItemProps): JSX.Element => {
  return (
    <option className='dropdown-item' value={value.toLowerCase()}>
      {value}
    </option>
  )
}
