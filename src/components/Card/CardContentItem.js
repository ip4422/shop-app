import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CardContentItem extends Component {
  render() {
    const { caption, value } = this.props
    return (
      <div class='row mb-1'>
        <span class='mr-3'>{caption}:</span>
        <span>{value}</span>
      </div>
      // <div className='col-2 '>
      //         <p className='card-text'>{caption}:</p>
      //         <p className='card-text'>{value}</p>
      //       </div>
    )
  }
}

CardContentItem.propTypes = {
  caption: PropTypes.string,
  value: PropTypes.string,
}
