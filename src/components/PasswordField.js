import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PasswordField extends Component {
  render() {
    const { onChange, caption, name } = this.props
    return (
      <div className='form-group'>
        <label htmlFor='InputPassword'>{caption}</label>
        <input
          type='password'
          data-field-name={'password'}
          onChange={onChange}
          className='form-control'
          name={name}
          placeholder='Password'
        />
      </div>
    )
  }
}

PasswordField.propTypes = {
  caption: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default PasswordField
