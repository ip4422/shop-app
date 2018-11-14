import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardAvatar from './CardAvatar'
import CardContentItem from './CardContentItem'
import CheckBoxControl from '../UIControls/CheckBoxControl'
import ButtonControl from '../UIControls/ButtonControl'

const PROPS_COL_CLASSES = 'col-xs-6 col-sm-7 col-md-9 col-lg-9'

class Card extends Component {
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
                  <CardContentItem caption={'Issue Date'} value={item.issueDate} />
                  <CardContentItem caption={'Price'} value={item.price} />
                </div>
                <div className='row pt-3'>
                  <CardContentItem caption={'Color'} value={item.color} />
                  <CheckBoxControl caption={'In Stock Only'} value={item.inStock}
                    onChange={(event) => {
                      onChange({
                        id:item.id,
                        inStock: event.currentTarget.checked
                      })
                    }}
                  />
                  <ButtonControl caption={'Order'} onClick={null} />
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
}

export default Card