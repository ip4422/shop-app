import React from 'react'
import PropTypes from 'prop-types'

import { DatePicker, CheckBox, Amount, DropDown } from '..'

export class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedFromDate: null,
      focusedToDate: null,
    }
  }

  // need for DatePicker
  handleFocusChange = ({ focused }) => {
    this.setState({ focusedFromDate: focused })
  }

  render() {
    const { onChange, filter, colors } = this.props
    return (
      <div className='container'>
        <div className='pt-3 pb-3 mb-3'>
          <div className='container'>
            <div className='row'>
              <DatePicker
                date={filter.fromDate}
                onDateChange={onChange('fromDate')}
                focused={this.state.focusedFromDate}
                onFocusChange={this.handleFocusChange}
                id={'from-date-id'}
              />
              <DatePicker
                date={filter.toDate}
                onDateChange={onChange('toDate')}
                focused={this.state.focusedToDate}
                onFocusChange={this.handleFocusChange}
                id={'to-date-id'}
              />
              <CheckBox
                caption={'In Stock only'}
                onChange={onChange('inStockOnly')}
                checked={filter.inStockOnly}
              />
            </div>
            <div className='row'>
              <div className='col'> Price </div>
            </div>
            <div className='row'>
              <Amount caption={'From'} onChange={onChange('priceFrom')} />
              <Amount caption={'To'} onChange={onChange('priceTo')} />
              <DropDown
                caption={'Color'}
                onChange={onChange('color')}
                items={colors}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
}
