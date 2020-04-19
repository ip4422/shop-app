import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../css/filters.css'
import { SingleDatePicker } from 'react-dates'

export class DatePicker extends Component {
  render() {
    const {
      caption,
      date,
      onDateChange,
      focused,
      onFocusChange,
      id,
      onOutsideRange,
    } = this.props
    return (
      <div className='col-4'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='from-date-label'>
              {caption}
            </span>
          </div>
          <SingleDatePicker
            date={date}
            numberOfMonths={1}
            isOutsideRange={onOutsideRange}
            onDateChange={onDateChange}
            focused={focused}
            onFocusChange={onFocusChange}
            id={id}
          />
        </div>
      </div>
    )
  }
}

DatePicker.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  date: PropTypes.object,
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
}

DatePicker.defaultProps = {
  onOutsideRange: () => false,
  caption: 'Date:',
}
