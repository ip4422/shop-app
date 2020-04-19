import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class DropDownLayout extends Component {
  render() {
    const { caption, items } = this.props
    return (
      <div className='col-4'>
        <div className='input-group'>
          <div className='form-control text-right bd-highlight form-control_right-border'>
            {caption}
          </div>
          <div className='input-group-append'>{items}</div>
        </div>
      </div>
    )
  }
}

DropDownLayout.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.node,
}
