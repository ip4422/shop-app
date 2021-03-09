import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CardAvatar, CardContentItem } from '.'
import { Button, CheckBox } from '..'

const IMAGE_COL_MIN_WIDTH = '150px'

export class Card extends Component {
  render() {
    const { onChange } = this.props
    const { image, name, price, color, issueDate, inStock } = this.props.item

    return (
      <div data-test='card-component' className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-2' style={{ minWidth: IMAGE_COL_MIN_WIDTH }}>
            <CardAvatar data-test='card-avatar' imageSrc={image} name={name} />
          </div>
          <div className='col-md-10'>
            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              <div className='row'>
                <div className='col-7'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <CardContentItem
                            data-test='card-price'
                            caption='Price'
                            value={price}
                          />
                          <CardContentItem
                            data-test='card-issue-date'
                            caption='Issue Date'
                            value={issueDate}
                          />
                          <CardContentItem
                            data-test='card-color'
                            caption='Color'
                            value={color}
                          />
                          <div
                            className='row mt-2'
                            style={{ maxWidth: '220px' }}
                          >
                            <CheckBox
                              data-test='card-in-stock-only'
                              caption={'In Stock Only'}
                              value={inStock}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='card-text'></p>
                </div>
                <div className='col-5 align-self-center'>
                  <Button caption={'Order'} onClick={null} width='220px' />
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
