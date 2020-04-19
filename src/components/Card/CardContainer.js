import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setInStock } from '../../actions/itemsActions'
import { Card } from './Card'

class CardContainer extends React.Component {
  handleChange = id => value => {
    this.props.setInStock({
      id: id,
      inStock: value,
    })
  }

  render() {
    const { item } = this.props
    return (
      <Card item={item} key={item.id} onChange={this.handleChange(item.id)} />
    )
  }
}

CardContainer.propTypes = {
  item: PropTypes.object,
  key: PropTypes.string,
  setInStock: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  setInStock: item => setInStock(item),
}

const WrappedCardContainer = connect(null, mapDispatchToProps)(CardContainer)
export { WrappedCardContainer as CardContainer }
