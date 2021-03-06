import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
  render() {
    const { caption, onClick, width } = this.props
    return (
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={onClick}
          style={{ ...(width && {width}) }}
        >
          {caption}
        </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
}
