import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropDownItem } from './DropDownItem'

export class DropDownItems extends Component {
  render() {
    const { id, name, onChange, items } = this.props
    return (
      <select className='custom-select form-control' name={name} onChange={onChange} id={id}>
        {items &&
          items.map(value => (
            <DropDownItem value={value} key={`dd-item-key-${value}`} />
          ))}
      </select>
    )
  }
}

DropDownItems.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
