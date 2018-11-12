import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import CardContentItem from './CardContentItem'
import CheckBoxControl from './CheckBoxControl'
import ButtonControl from './ButtonControl'

const PROPS_COL_CLASSES = 'col-xs-6 col-sm-7 col-md-9 col-lg-9'

class Card extends PureComponent {

  onChangeHandler = (event) => {
  }

  onClickHandler = (event) => {
  }

  render() {
    const { item } = this.props
    return (
      <div className='card border-secondary mb-3' key={item.id}>
        <div className='card-body'>
          <div className='row'>
            <Avatar imageSrc={item.image} name={item.name} />
            <div className={PROPS_COL_CLASSES}>
              <div className='container'>
                <div className='row pt-3'>
                  <CardContentItem caption={'Name'} value={item.name} />
                  <CardContentItem caption={'Issue Date'} value={item.issueDate} />
                  <CardContentItem caption={'Price'} value={item.price} />
                </div>
                <div className='row pt-3'>
                  <CardContentItem caption={'Color'} value={item.color} />
                  <CheckBoxControl caption={'In Stock Only'} value={item.inStock} onChangeHandler={this.onChangeHandler} />
                  <ButtonControl caption={'Order'} onClick={this.onClickHandler} />
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