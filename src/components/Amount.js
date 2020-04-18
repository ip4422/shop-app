import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Amount extends Component {
  render() {
    const { name, onChange, caption } = this.props
    return (
      <div className='col-4'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>{caption} $</span>
          </div>
          <input
            name={name}
            type='text'
            className='form-control'
            aria-label='Amount (to the nearest dollar)'
            onChange={onChange}
          />
        </div>
      </div>
    )
  }
}

Amount.propTypes = {
  caption: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Amount
