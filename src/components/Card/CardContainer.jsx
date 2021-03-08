import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setInStock } from '../../actions/itemsActions'
import { Card } from './Card'

export class CardContainerUnconnected extends React.Component {
  handleChange = id => value => {
    this.props.setInStock({
      id: id,
      inStock: value,
    })
  }

  render() {
    const { item } = this.props
    return (
      <Card data-test='card-container' item={item} onChange={this.handleChange(item.id)} />
    )
  }
}

CardContainerUnconnected.propTypes = {
  item: PropTypes.object,
  setInStock: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  setInStock: item => setInStock(item),
}

const WrappedCardContainer = connect(null, mapDispatchToProps)(CardContainerUnconnected)
export { WrappedCardContainer as CardContainer }
