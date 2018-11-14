import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getBool } from '../../helpers/service'

class CheckBoxControl extends Component {
  render() {
    const { caption, value, onChange, id } = this.props
    return (
      <div className='col-3'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              {id ? <input
                type='checkbox'
                id={id}
                aria-label={`Checkbox for ${caption}`}
                onChange={onChange}
                checked={getBool(value)}
              />
                :
                <input
                  type='checkbox'
                  aria-label={`Checkbox for ${caption}`}
                  onChange={onChange}
                  checked={getBool(value)}
                />}
            </div>
          </div>
          <div className='form-control form-control_left-border text-left bd-highlight'>{caption}</div>
        </div>
      </div>
    )
  }
}

CheckBoxControl.propTypes={
  onChange: PropTypes.func.isRequired,
}

export default CheckBoxControl