import React from 'react'

import { IPasswordFieldProps } from './types'

export const PasswordField = ({
  onChange,
  caption,
  name,
  value,
}: IPasswordFieldProps): JSX.Element => {
  return (
    <div className='form-group'>
      <label htmlFor='InputPassword'>{caption}</label>
      <input
        type='password'
        data-field-name='password'
        onChange={onChange}
        className='form-control'
        name={name}
        placeholder='Password'
        value={value}
      />
    </div>
  )
}
