import React, { Component } from 'react';


class EmailField extends Component {
  render() {
    const {onChange} = this.props
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
          placeholder='Enter email' />
      </div>
    );
  }
}

export default EmailField;