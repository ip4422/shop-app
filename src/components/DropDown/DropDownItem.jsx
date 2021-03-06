import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class DropDownItem extends Component {
  render() {
    const { value } = this.props
    return (
      <option className='dropdown-item' value={value.toLowerCase()}>
        {value}
      </option>
    )
  }
}

DropDownItem.propTypes = {
  value: PropTypes.string,
}
