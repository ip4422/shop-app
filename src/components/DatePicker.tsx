import React from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import '../css/filters.css'

interface DatePickerProps {
  onDateChange: (date: moment.Moment | null) => void
  onFocusChange: (arg: { focused: boolean }) => void
  focused?: boolean
  date?: moment.Moment | null
  id: string
  caption?: string
}

export const DatePicker = ({
  caption,
  date = null,
  onDateChange,
  focused = false,
  onFocusChange,
  id,
}: DatePickerProps): JSX.Element => {
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
