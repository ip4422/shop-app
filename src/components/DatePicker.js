
import React, { Component } from 'react';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../css/filters.css'
import { SingleDatePicker } from 'react-dates'


class DatePicker extends Component {
  render() {
    const { date, onDateChange, focused, onFocusChange, id } = this.props
    return (
      <div className='col-4'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='from-date-label'>From:</span>
          </div>
          <SingleDatePicker
            date={date} // momentPropTypes.momentObj or null
            numberOfMonths={1}
            isOutsideRange={() => false}
            onDateChange={onDateChange} // PropTypes.func.isRequired
            focused={focused} // PropTypes.bool
            onFocusChange={onFocusChange} // PropTypes.func.isRequired
            id={id} // PropTypes.string.isRequired,
          />
        </div>
      </div>

    );
  }
}

export default DatePicker;