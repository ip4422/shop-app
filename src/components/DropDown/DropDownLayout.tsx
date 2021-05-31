import React, { ChangeEventHandler } from 'react'

import { DropDownItems } from './DropDownItems'

interface DropDownLayoutProps {
  id?: string
  caption?: string
  name?: string
  items: string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export const DropDownLayout = ({
  id = '',
  caption = '',
  name = '',
  items = [],
  onChange,
}: DropDownLayoutProps): JSX.Element => {
  return (
    <div className='col-4'>
      <div className='input-group input-group-lg'>
        <div className='input-group-prepend'>
          <label className='input-group-text' htmlFor={id}>
            {caption}
          </label>
        </div>
        <DropDownItems items={items} id={id} name={name} onChange={onChange} />
      </div>
    </div>
  )
}
