import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class EmailField extends Component {
  render() {
    const { onChange, value } = this.props
    return (
      <div className='form-group'>
        <label htmlFor='email'>Email address</label>
        <input
          type='email'
          data-field-name={'email'}
          onChange={onChange}
          className='form-control'
          name='email'
          aria-describedby='emailHelp'
          placeholder='Enter email'
          value={value}
        />
      </div>
    )
  }
}

EmailField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}
