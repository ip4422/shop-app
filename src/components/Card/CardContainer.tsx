import React from 'react'
import { connect } from 'react-redux'

import { ProductItem } from '../../reducers/types'
import { setInStock, InStockAction, InStock } from '../../actions/itemsActions'
import { Card } from './Card'

interface CardContainerProps {
  item: ProductItem
  key: string
  setInStock: (item: InStock) => InStockAction
}

const CardContainer = ({
  item,
  key,
  setInStock,
}: CardContainerProps): JSX.Element => {
  const handleChange =
    (id: string) =>
    (value: boolean): void => {
      setInStock({
        id: id,
        inStock: value,
      })
    }

  return <Card item={item} key={item.id} onChange={handleChange(item.id)} />
}

const mapDispatchToProps = {
  setInStock: (item: InStock): InStockAction => setInStock(item),
}

const WrappedCardContainer = connect(null, mapDispatchToProps)(CardContainer)
export { WrappedCardContainer as CardContainer }
