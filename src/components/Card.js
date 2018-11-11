import React from 'react'
import PropTypes from 'prop-types'

const IMAGE_COL_CLASSES = 'col-xs-6 col-sm-5 col-md-3 col-lg-3'
const PROPS_COL_CLASSES = 'col-xs-6 col-sm-7 col-md-9 col-lg-9'


const Card = ({ ...rest }) => {

  const onChangeHandler = (event) => {
    console.log('event :', event)
  }

  if (JSON.parse(rest.item.isFiltered.toLowerCase().trim())) {
    return ''
  }
  return (
    <div className='card border-secondary mb-3' key={rest.item.name}>
      <div className='card-body text-secondary'>
        <div className='container'>
          <div className='row'>
            <div className={IMAGE_COL_CLASSES}>
              <img src={rest.item.image} alt={rest.item.name} style={{ 'maxWidth': '150px' }}></img>
            </div>
            <div className={PROPS_COL_CLASSES}>
              <div className='container'>
                <div className='row pt-3'>
                  <div className='col-3 '>
                    <p className='card-text'>Name:</p>
                    <p className='card-text'>{rest.item.name}</p>
                  </div>
                  <div className='col-3'>
                    <p className='card-text'>Issue Date:</p>
                    <p className='card-text'>{rest.item.issueDate}</p>
                  </div>
                  <div className='col-3'>
                    <p className='card-text'>Price:</p>
                    <p className='card-text'>{rest.item.price} $</p>
                  </div>
                </div>
                <div className='row pt-3'>
                  <div className='col-3'>
                    <p className='card-text'>Color:</p>
                    <p className='card-text'>{rest.item.color}</p>
                  </div>
                  <div className='col-3'>
                    <div className='input-group mb-3'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text'>
                          <input
                            type='checkbox'
                            aria-label='Checkbox for In Stock only'
                            onChange={onChangeHandler}
                            checked={JSON.parse(rest.item.inStock.toLowerCase().trim())}
                          />
                        </div>
                      </div>
                      <div className='form-control form-control_left-border text-left bd-highlight'>In Stock only</div>
                    </div>
                  </div>
                  <div className='col-3 pt-3'>
                    <button type='button' className='btn btn-outline-secondary'>Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Card