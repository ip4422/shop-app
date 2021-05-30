import { ProductItem, Filter } from '../reducers/types'

export const SET_ITEM = 'SET_ITEM'
export const SET_FILTER = 'SET_FILTER'
export const SET_INSTOCK = 'SET_INSTOCK'

export type ItemAction = {
  type: string
  payload: ProductItem | Filter
}

export function setItem(item: ProductItem): ItemAction {
  return {
    type: SET_ITEM,
    payload: item,
  }
}

export function setInStock(item: ProductItem): ItemAction {
  return {
    type: SET_INSTOCK,
    payload: item,
  }
}

export function setFilter(filter: Filter): ItemAction {
  return {
    type: SET_FILTER,
    payload: filter,
  }
}
