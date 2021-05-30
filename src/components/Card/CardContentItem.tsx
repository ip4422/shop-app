import React from 'react'

import { ICardContentItemProps } from '../types'

export const CardContentItem = ({
  caption,
  value,
}: ICardContentItemProps): JSX.Element => {
  return (
    <div className='row mb-1'>
      <span className='mr-3'>{caption}:</span>
      <span>{value}</span>
    </div>
  )
}
