import React from 'react'
import { connect } from 'react-redux'

import { ProductItem } from '../../reducers/types'
import { setInStock } from '../../actions/itemsActions'
import { Card } from './Card'

interface CardContainerProps {
  item: ProductItem
  key: string
  setInStock: <T>(item: T) => any
}

const CardContainer = ({
  item,
  key,
  setInStock,
}: CardContainerProps): JSX.Element => {
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
