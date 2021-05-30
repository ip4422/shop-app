import React, { ChangeEvent } from 'react'

import { getBool } from '../helpers/service'

interface CheckBoxProps {
  caption?: string
  name?: string
  value?: string | boolean
  onChange: (value: boolean) => void
  isLarge?: boolean
}

export const CheckBox = ({
  caption,
  value,
  name,
  isLarge,
  onChange,
}: CheckBoxProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }
  return (
    <div className={`input-group mb-3 ${isLarge ? 'input-group-lg' : ''}`}>
      <div className='input-group-prepend'>
        <div className='input-group-text'>
          {name ? (
            <input
              type='checkbox'
              name={name}
              aria-label={`Checkbox for ${caption}`}
              onChange={handleChange}
              checked={getBool(value)}
            />
          ) : (
            <input
              type='checkbox'
              aria-label={`Checkbox for ${caption}`}
              onChange={handleChange}
              checked={getBool(value)}
            />
          )}
        </div>
      </div>
      <div className='form-control'>{caption}</div>
    </div>
  )
}
