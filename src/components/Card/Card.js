import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CardAvatar, CardContentItem } from './'
import { Button, CheckBox } from '../'

const PROPS_COL_CLASSES = 'col-xs-6 col-sm-7 col-md-9 col-lg-9'

export class Card extends Component {
  render() {
    const { item, onChange } = this.props
    return (
      <div className='card border-secondary mb-3' key={item.id}>
        <div className='card-body'>
          <div className='row'>
            <CardAvatar imageSrc={item.image} name={item.name} />
            <div className={PROPS_COL_CLASSES}>
              <div className='container'>
                <div className='row pt-3'>
                  <CardContentItem caption={'Name'} value={item.name} />
                  <CardContentItem
                    caption={'Issue Date'}
                    value={item.issueDate}
                  />
                  <CardContentItem caption={'Price'} value={item.price} />
                </div>
                <div className='row pt-3'>
                  <CardContentItem caption={'Color'} value={item.color} />
                  <CheckBox
                    caption={'In Stock Only'}
                    value={item.inStock}
                    onChange={onChange}
                  />
                  <Button caption={'Order'} onClick={null} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
