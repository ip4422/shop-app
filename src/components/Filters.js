import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getBool } from '../helpers/service'
import DatePickerControl from './UIControls/DatePickerControl'
import CheckBoxControl from './UIControls/CheckBoxControl'
import AmountControl from './UIControls/AmountControl'
import DropDownControl from './UIControls/DropDownControl'

import moment from 'moment'
// import debounce from 'lodash/debounce'


const FROM_DATE_ID = 'from-date-id'
const TO_DATE_ID = 'to-date-id'
const IN_STOCK_ONLY_ID = 'in-stock-only'
const FROM_AMOUNT_ID = 'from-amount-id'
const TO_AMOUNT_ID = 'to-amount-id'
const COLOR_ID = 'color-id'

//TODO: переделать на работу со стором



class Filters extends Component {
  constructor(props) {
    super(props)
    const { items, colors, errorMsg } = this.props
    this.state = {
      isFilterChanged: false,
      fromDate: null,
      date: null,
      toDate: null,
      focusedFromDate: null,
      focusedToDate: null,
      inStockOnly: false,
      priceFrom: null,
      proceTo: null,
      color: null,
      items,
      colors,
      errorMsg,
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    // this.onChangeHandlerDebounced = debounce(this.onChangeHandler,400)
  }

  componentDidUpdate(prevProps) {
    if (this.state.isFilterChanged) {
      this.setState({ isFilterChanged: false })
      this.props.setItems(this.state.items.map(item => this.applyFilter(item)))
    }
  }

  applyFilter(item) {
    let filtered_item = item
    filtered_item.isFiltered = false

    // compare date interval
    const itemDate = moment(item.issueDate, 'MM-DD-YYYY')
    if (this.state.fromDate && itemDate.diff(this.state.fromDate) < 0) {
      filtered_item.isFiltered = true
      return filtered_item
    } else if (this.state.toDate && this.state.toDate.diff(itemDate) < 0) {
      filtered_item.isFiltered = true
      return filtered_item
    }

    // check inStockOnly property
    if (this.state.inStockOnly && getBool(item.inStock) !== this.state.inStockOnly) {
      filtered_item.isFiltered = true
      return filtered_item
    }

    // check price range
    if (this.state.priceFrom && (item.price < this.state.priceFrom)) {
      filtered_item.isFiltered = true
      return filtered_item
    } else if (this.state.priceTo && (item.price > this.state.priceTo)) {
      filtered_item.isFiltered = true
      return filtered_item
    }

    // check color
    if (this.state.color && this.state.color !== item.color) {
      filtered_item.isFiltered = true
      return filtered_item
    }
    return filtered_item
  }

  onChangeHandler(event) {
    const fieldName = event.currentTarget.id
    switch (fieldName) {
      case IN_STOCK_ONLY_ID:
        this.setState({
          inStockOnly: event.currentTarget.checked,
          isFilterChanged: true
        })
        break
      case COLOR_ID:
        this.setState({
          color: event.currentTarget.value,
          isFilterChanged: true
        })
        break
      case FROM_AMOUNT_ID:
        this.setState({
          priceFrom: parseFloat(event.currentTarget.value),
          isFilterChanged: true
        })
        break
      case TO_AMOUNT_ID:
        this.setState({
          priceTo: parseFloat(event.currentTarget.value),
          isFilterChanged: true
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
              <DatePickerControl
                date={this.state.fromDate}
                onDateChange={date => this.setState({
                  fromDate: date,
                  isFilterChanged: true
                })}
                focused={this.state.focusedFromDate}
                onFocusChange={({ focused }) => this.setState({ focusedFromDate: focused })} // PropTypes.func.isRequired
                id={FROM_DATE_ID}
              />
              <DatePickerControl
                date={this.state.toDate}
                onDateChange={date => this.setState({
                  toDate: date,
                  isFilterChanged: true
                })}
                focused={this.state.focusedToDate}
                onFocusChange={({ focused }) => this.setState({ focusedToDate: focused })} // PropTypes.func.isRequired
                id={TO_DATE_ID}
              />
              <CheckBoxControl
                id={IN_STOCK_ONLY_ID}
                caption={'In Stock only'}
                onChange={this.onChangeHandler}
                checked={this.state.inStockOnly}
              />
            </div>
            <div className='row'>
              <div className='col'>
                Price
            </div>
            </div>
            <div className='row'>
              <AmountControl
                id={FROM_AMOUNT_ID}
                caption={'From'}
                onChange={this.onChangeHandler}
              />
              <AmountControl
                id={TO_AMOUNT_ID}
                caption={'To'}
                onChange={this.onChangeHandler}
              />
              <DropDownControl
                id={COLOR_ID}
                caption={'Color'}
                onChange={this.onChangeHandler}
                items={this.state.colors}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  items: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
}

export default Filters