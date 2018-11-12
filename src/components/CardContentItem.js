import React, { Component } from 'react'


class CardContentItem extends Component {
  render() {
    const { caption, value} = this.props
    return (
      <div className='col-3 '>
        <p className='card-text'>{caption}:</p>
        <p className='card-text'>{value}</p>
      </div>

    )
  }
}

export default CardContentItem