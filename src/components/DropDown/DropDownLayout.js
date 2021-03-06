import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropDownItems } from './DropDownItems'

export class DropDownLayout extends Component {
  render() {
    const { id, caption, items, onChange } = this.props
    return (
      <div className='col-4'>
        <div className='input-group input-group-lg'>
          <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor={id}>
              {caption}
            </label>
          </div>
          <DropDownItems items={items} id={id} onChange={onChange} />
        </div>
      </div>
    )
  }
}

DropDownLayout.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}
