export const SET_ITEMS = 'SET_ITEMS'
export const SET_FILTER = 'SET_FILTER'
export const SET_INSTOCK = 'SET_INSTOCK'

export function setItems(items) {
  return {
    type: SET_ITEMS,
    payload: items,
  }
}

export function setInStock(items) {
  return {
    type: SET_INSTOCK,
    payload: items,
  }
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  }
}
