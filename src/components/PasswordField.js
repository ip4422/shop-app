import React, { Component } from 'react';


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
          // name='InputPassword'
          placeholder='Password' />
      </div>
    );
  }
}

export default PasswordField;


