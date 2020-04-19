import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { DropDownLayout } from './'

export class DropDown extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event.target.value)
  }

  getListItems() {
    const { items, name } = this.props
    return (
      <select name={name} onChange={this.handleChange}>
        {items &&
          items.map(value => (
            <option value={value.toLowerCase()} key={value}>
              {value}
            </option>
          ))}
      </select>
    )
  }

  render() {
    const { caption } = this.props
    return <DropDownLayout caption={caption} items={this.getListItems()} />
  }
}

DropDown.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string,
  caption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
