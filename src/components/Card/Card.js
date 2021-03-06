import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CardAvatar, CardContentItem } from './'
import { Button, CheckBox } from '../'

const IMAGE_COL_MIN_WIDTH = '150px'

export class Card extends Component {
  render() {
    const { item, onChange } = this.props
    return (
      <>
        <div class='card mb-3'>
          <div class='row no-gutters'>
            <div class='col-md-2' style={{ minWidth: IMAGE_COL_MIN_WIDTH }}>
              <CardAvatar imageSrc={item.image} name={item.name} />
            </div>
            <div class='col-md-10'>
              <div class='card-body'>
                <h5 class='card-title'>{item.name}</h5>
                <div class='row'>
                  <div class='col-7'>
                    <div class='container'>
                      <div class='row'>
                        <div class='col'>
                          <div class='container'>
                            <CardContentItem
                              caption='Price'
                              value={item.price}
                            />
                            <CardContentItem
                              caption='Issue Date'
                              value={item.issueDate}
                            />
                            <CardContentItem
                              caption='Color'
                              value={item.color}
                            />
                            <div class='row mt-2' style={{ maxWidth: '220px' }}>
                              <CheckBox
                                caption={'In Stock Only'}
                                value={item.inStock}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class='card-text'></p>
                  </div>
                  <div class='col-5 align-self-center'>
                    <Button caption={'Order'} onClick={null} width='220px' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
