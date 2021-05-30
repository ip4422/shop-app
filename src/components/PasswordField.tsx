import React, { SyntheticEvent } from 'react'

interface PasswordFieldProps {
  caption: string
  name: string
  onChange: (event: SyntheticEvent) => void
  value: string
}

export const PasswordField = ({
  onChange,
  caption,
  name,
  value,
}: PasswordFieldProps): JSX.Element => {
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
