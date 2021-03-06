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
  handleFocusChange = fieldName => ({ focused }) => {
    this.setState({ [fieldName]: focused })
  }

  render() {
    const { onChange, filter, colors } = this.props
    return (
      <div className='container'>
        <div className='pt-3 pb-3 mb-3'>
          <div className='container'>
            <div className='row mb-3'>
              <DatePicker
                caption={'From:'}
                date={filter.fromDate}
                onDateChange={onChange('fromDate')}
                focused={this.state.focusedFromDate}
                onFocusChange={this.handleFocusChange('focusedFromDate')}
                id={'from-date-id'}
              />
              <DatePicker
                caption={'To:'}
                date={filter.toDate}
                onDateChange={onChange('toDate')}
                focused={this.state.focusedToDate}
                onFocusChange={this.handleFocusChange('focusedToDate')}
                id={'to-date-id'}
              />
              <div className='col-4'>
                <CheckBox
                  caption={'In Stock only'}
                  onChange={onChange('inStockOnly')}
                  checked={filter.inStockOnly}
                  isLarge
                />
              </div>
            </div>
            <div className='row'>
              <Amount caption={'Price from'} onChange={onChange('priceFrom')} />
              <Amount caption={'Price to'} onChange={onChange('priceTo')} />
              <DropDown
                id='color-picker'
                caption={'Color'}
                items={colors}
                onChange={onChange('color')}
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
