import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getBool } from '../helpers/service'

export class CheckBox extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event.target.checked)
  }

  render() {
    const { caption, value, name } = this.props
    return (
      <div className='col-4'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              {name ? (
                <input
                  type='checkbox'
                  name={name}
                  aria-label={`Checkbox for ${caption}`}
                  onChange={this.handleChange}
                  checked={getBool(value)}
                />
              ) : (
                <input
                  type='checkbox'
                  aria-label={`Checkbox for ${caption}`}
                  onChange={this.handleChange}
                  checked={getBool(value)}
                />
              )}
            </div>
          </div>
          <div className='form-control form-control_left-border text-left bd-highlight'>
            {caption}
          </div>
        </div>
      </div>
    )
  }
}

CheckBox.propTypes = {
  caption: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
}
