import React from 'react'

import { IButtonProps } from './types'

export const Button = ({
  caption,
  onClick,
  width,
}: IButtonProps): JSX.Element => {
  return (
    <button
      type='button'
      className='btn btn-outline-secondary'
      onClick={onClick}
      style={{ ...(width && { width }) }}
    >
      {caption}
    </button>
  )
}
