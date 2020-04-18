import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DropDownLayout from './DropDownLayout'

class DropDown extends Component {
  getListItems() {
    const { items, name, onChange } = this.props
    return (
      <select name={name} onChange={onChange}>
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

export default DropDown
