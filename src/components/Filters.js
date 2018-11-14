import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from './DatePicker'
import CheckBox from './CheckBox'
import Amount from './Amount'
import DropDown from './DropDown'

const FROM_DATE_ID = 'from-date-id'
const TO_DATE_ID = 'to-date-id'
const IN_STOCK_ONLY_ID = 'in-stock-only'
const FROM_AMOUNT_ID = 'from-amount-id'
const TO_AMOUNT_ID = 'to-amount-id'
const COLOR_ID = 'color-id'

class Filters extends Component {
  constructor(props) {
    super(props)
    const { colors, errorMsg, setFilter, filter } = this.props
    this.state = {
      focusedFromDate: null,
      focusedToDate: null,
      fromDate:filter.fromDate,
      toDate:filter.toDate,
      filter,
      colors,
      errorMsg,
      setFilter,
    }
  }

  onChangeHandler = (event) => {
    const fieldName = event.currentTarget.name
    switch (fieldName) {
      case IN_STOCK_ONLY_ID:
        this.state.setFilter({
          inStockOnly: event.currentTarget.checked,
        })
        break
      case COLOR_ID:
        this.state.setFilter({
          color: event.currentTarget.value,
        })
        break
      case FROM_AMOUNT_ID:
        this.state.setFilter({
          priceFrom: parseFloat(event.currentTarget.value),
        })
        break
      case TO_AMOUNT_ID:
        this.state.setFilter({
          priceTo: parseFloat(event.currentTarget.value),
        })
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='pt-3 pb-3 mb-3'>
          <div className='container'>
            <div className='row'>
              <DatePicker
                date={this.state.fromDate}
                onDateChange={date => {
                  this.state.setFilter({ fromDate: date, })
                  this.setState({ fromDate: date, })
                }}
                focused={this.state.focusedFromDate}
                onFocusChange={({ focused }) => this.setState({ focusedFromDate: focused })} // PropTypes.func.isRequired
                id={FROM_DATE_ID}
              />
              <DatePicker
                date={this.state.toDate}
                onDateChange={date => {
                  this.state.setFilter({ ToDate: date, })
                  this.setState({ ToDate: date, })
                }}
                focused={this.state.focusedToDate}
                onFocusChange={({ focused }) => this.setState({ focusedToDate: focused })} // PropTypes.func.isRequired
                id={TO_DATE_ID}
              />
              <CheckBox name={IN_STOCK_ONLY_ID} caption={'In Stock only'} onChange={this.onChangeHandler} checked={this.state.filter.inStockOnly} />
            </div>
            <div className='row'> <div className='col'> Price </div> </div> <div className='row'>
              <Amount name={FROM_AMOUNT_ID} caption={'From'} onChange={this.onChangeHandler} /> 
              <Amount name={TO_AMOUNT_ID} caption={'To'} onChange={this.onChangeHandler} />
              <DropDown name={COLOR_ID} caption={'Color'} onChange={this.onChangeHandler} items={this.state.colors} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  items: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
}

export default Filters