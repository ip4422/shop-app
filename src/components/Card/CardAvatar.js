import React, { Component } from 'react'

const IMAGE_COL_CLASSES = 'col-xs-6 col-sm-5 col-md-3 col-lg-3'

class CardAvatar extends Component {
  render() {
    const {imageSrc, name} = this.props
    return (
      <div className={IMAGE_COL_CLASSES}>
        <img src={imageSrc} alt={name} style={{ 'maxWidth': '150px' }}></img>
      </div>
    )
  }
}

export default CardAvatar