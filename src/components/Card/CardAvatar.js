import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CardAvatar extends Component {
  render() {
    const { imageSrc, name } = this.props
    return <img src={imageSrc} alt={name} style={{ maxWidth: '150px' }} />
  }
}

CardAvatar.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
}
