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

  render() {
    const { id, caption, items, name } = this.props
    return (
      <DropDownLayout
        id={id}
        caption={caption}
        items={items}
        name={name}
        onChange={this.handleChange}
      />
    )
  }
}

DropDown.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  items: PropTypes.array.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
