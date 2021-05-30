import React from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import '../css/filters.css'
import { IDatePickerProps } from './types'

export const DatePicker = ({
  caption,
  date = null,
  onDateChange,
  focused = false,
  onFocusChange,
  id,
}: IDatePickerProps): JSX.Element => {
  const handleOutsideRange = () => false

  return (
    <div className='col-4'>
      <div className='input-group input-group-lg'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='from-date-label'>
            {caption}
          </span>
        </div>
        <SingleDatePicker
          date={date}
          numberOfMonths={1}
          isOutsideRange={handleOutsideRange}
          onDateChange={onDateChange}
          focused={focused}
          onFocusChange={onFocusChange}
          id={id}
        />
      </div>
    </div>
  )
}
