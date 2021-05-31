import { ProductItem, Filter } from '../reducers/types'

export const SET_ITEM = 'SET_ITEM'
export const SET_FILTER = 'SET_FILTER'
export const SET_INSTOCK = 'SET_INSTOCK'

export type ItemAction = {
  type: string
  payload: Partial<ProductItem>
}

export type InStock = {
  id: string
  inStock: boolean
}

export type InStockAction = {
  type: string
  payload: InStock
}

export type FilterAction = {
  type: string
  payload: Partial<Filter>
}

export function setItem(item: Partial<ProductItem>): ItemAction {
  return {
    type: SET_ITEM,
    payload: item,
  }
}

export function setInStock(item: InStock): InStockAction {
  return {
    type: SET_INSTOCK,
    payload: item,
  }
}

export function setFilter(filter: Partial<Filter>): FilterAction {
  return {
    type: SET_FILTER,
    payload: filter,
  }
}
