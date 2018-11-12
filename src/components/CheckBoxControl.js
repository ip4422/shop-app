import React, { Component } from 'react'
import { getBool } from '../helpers/service'

class CheckBoxControl extends Component {
  render() {
    const { caption, value, onChangeHandler, id } = this.props
    return (
      <div className='col-3'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              {id ? <input
                type='checkbox'
                id={id}
                aria-label={`Checkbox for ${caption}`}
                onChange={onChangeHandler}
                checked={getBool(value)}
              />
                :
                <input
                  type='checkbox'
                  aria-label={`Checkbox for ${caption}`}
                  onChange={onChangeHandler}
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

export default CheckBoxControl