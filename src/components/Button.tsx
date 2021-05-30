import React, { MouseEventHandler } from 'react'

interface ButtonProps {
  caption?: string
  width?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
  caption,
  onClick,
  width,
}: ButtonProps): JSX.Element => {
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
