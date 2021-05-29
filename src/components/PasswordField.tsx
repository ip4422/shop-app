import React from 'react'

import { IPasswordFieldProps } from './types'

export const PasswordField = (props: IPasswordFieldProps): JSX.Element => {
  const { onChange, caption, name, value } = props
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

export default PasswordField
