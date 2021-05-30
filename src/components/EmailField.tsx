import React from 'react'
import { IEmailFieldProps } from './types'

export const EmailField = ({
  onChange,
  value,
}: IEmailFieldProps): JSX.Element => {
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
