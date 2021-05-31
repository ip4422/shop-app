import React from 'react'

interface CardContentItemProps {
  caption?: string
  value?: string
}

export const CardContentItem = ({
  caption,
  value,
}: CardContentItemProps): JSX.Element => {
  return (
    <div className='row mb-1'>
      <span className='mr-3'>{caption}:</span>
      <span>{value}</span>
    </div>
  )
}
