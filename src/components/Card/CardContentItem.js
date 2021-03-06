import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CardContentItem extends Component {
  render() {
    const { caption, value } = this.props
    return (
      <div className='row mb-1'>
        <span className='mr-3'>{caption}:</span>
        <span>{value}</span>
      </div>
    )
  }
}

CardContentItem.propTypes = {
  caption: PropTypes.string,
  value: PropTypes.string,
}
