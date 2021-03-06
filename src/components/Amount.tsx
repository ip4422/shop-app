import React, { ChangeEvent } from 'react'

interface AmountProps {
  caption?: string
  name?: string
  onChange: (value: string) => void
}

export const Amount = ({
  name,
  caption,
  onChange,
}: AmountProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className='col-4'>
      <div className='input-group input-group-lg'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>{caption} $</span>
        </div>
        <input
          name={name}
          type='text'
          className='form-control'
          aria-label='Amount (to the nearest dollar)'
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
