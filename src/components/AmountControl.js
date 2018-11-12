import React, { Component } from 'react';


class AmountControl extends Component {
  render() {
    const { id, onChange, caption } = this.props
    return (
      <div className='col-4'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>{caption} $</span>
          </div>
          <input
            id={id}
            type='text'
            className='form-control'
            aria-label='Amount (to the nearest dollar)'
            onChange={onChange}
          />
        </div>
      </div>

    );
  }
}

export default AmountControl;