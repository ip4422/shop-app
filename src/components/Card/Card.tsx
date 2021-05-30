import React from 'react'

import { CardAvatar, CardContentItem } from '.'
import { Button, CheckBox } from '..'
import { ICardProps } from '../types'

const IMAGE_COL_MIN_WIDTH = '150px'

export const Card = ({
  item = {} as ICardProps['item'],
  onChange,
}: ICardProps): JSX.Element => {
  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-2' style={{ minWidth: IMAGE_COL_MIN_WIDTH }}>
          <CardAvatar imageSrc={item.image} name={item.name} />
        </div>
        <div className='col-md-10'>
          <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            <div className='row'>
              <div className='col-7'>
                <div className='container'>
                  <div className='row'>
                    <div className='col'>
                      <div className='container'>
                        <CardContentItem caption='Price' value={item.price} />
                        <CardContentItem
                          caption='Issue Date'
                          value={item.issueDate}
                        />
                        <CardContentItem caption='Color' value={item.color} />
                        <div className='row mt-2' style={{ maxWidth: '220px' }}>
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
                <p className='card-text'></p>
              </div>
              <div className='col-5 align-self-center'>
                <Button caption={'Order'} width='220px' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
