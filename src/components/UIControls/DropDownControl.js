import React, { Component } from 'react';


class DropDownControl extends Component {

  getListItems(items, id, onChange) {
    return (
      <select id={id} onChange={onChange}>
        {items.map(value => (
          <option value={value.toLowerCase()} key={value}>{value}</option>
        ))}
      </select>
    )
  }

  render() {
    const { caption, items, id, onChange } = this.props
    return (
      <div className='col-4'>
        <div className='input-group'>
          <div className='form-control text-right bd-highlight form-control_right-border' >{caption}</div>
          {/* <input type='text' className='form-control' aria-label='Color Selector' /> */}
          <div className='input-group-append'>
            {this.getListItems(items, id, onChange)}
          </div>
        </div>
      </div>

    );
  }
}

export default DropDownControl;