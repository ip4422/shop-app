import React from 'react'

import { IDropDownItemProps } from '../types'

export const DropDownItem = ({ value = '' }: IDropDownItemProps): JSX.Element => {
  return (
    <option className='dropdown-item' value={value.toLowerCase()}>
      {value}
    </option>
  )
}
