import React from 'react'
import { connect } from 'react-redux'

import { setInStock } from '../../actions/itemsActions'
import { Card } from './Card'
import { ICardContainerProps } from '../types'

const CardContainer = ({
  item,
  key,
  setInStock,
}: ICardContainerProps): JSX.Element => {
  const handleChange =
    (id: string): (<T>(value: T) => any) =>
    value => {
      setInStock({
        id: id,
        inStock: value,
      })
    }

  return <Card item={item} key={item.id} onChange={handleChange(item.id)} />
}

const mapDispatchToProps = {
  setInStock: (item: any): any => setInStock(item),
}

const WrappedCardContainer = connect(null, mapDispatchToProps)(CardContainer)
export { WrappedCardContainer as CardContainer }
