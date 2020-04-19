import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Amount extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event.target.checked)
  }

  render() {
    const { name, caption } = this.props
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
            onChange={this.handleChange}
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
