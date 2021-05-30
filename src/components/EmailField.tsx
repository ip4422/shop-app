import React, { ChangeEvent } from 'react'

interface EmailFieldProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const EmailField = ({
  onChange,
  value,
}: EmailFieldProps): JSX.Element => {
  return (
    <div className='form-group'>
      <label htmlFor='email'>Email address</label>
      <input
        type='email'
        data-field-name={'email'}
        onChange={onChange}
        className='form-control'
        name='email'
        aria-describedby='emailHelp'
        placeholder='Enter email'
        value={value}
      />
    </div>
  )
}
