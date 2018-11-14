import React, { Component } from 'react'


class Button extends Component {
  render() {
    const { caption, onClick } = this.props
    return (
      <div className='col-3 pt-3'>
        <button type='button' className='btn btn-outline-secondary' onClick={onClick}>{caption}</button>
      </div>
    )
  }
}

export default Button