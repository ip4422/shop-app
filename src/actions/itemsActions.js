export const SET_ITEM = 'SET_ITEM'
export const SET_FILTER = 'SET_FILTER'
export const SET_INSTOCK = 'SET_INSTOCK'

export function setItem(item) {
  return {
    type: SET_ITEM,
    payload: item,
  }
}

export function setInStock(item) {
  return {
    type: SET_INSTOCK,
    payload: item,
  }
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  }
}

// export const SET_ITEM = 'SET_ITEM'
// export const SET_FILTER = 'SET_FILTER'
// export const SET_INSTOCK = 'SET_INSTOCK'

// export function setItem<T>(item: T): void {
//   return {
//     type: SET_ITEM,
//     payload: item,
//   }
// }

// export function setInStock<T>(item: T): void {
//   return {
//     type: SET_INSTOCK,
//     payload: item,
//   }
// }

// export function setFilter<T>(filter: T): void {
//   return {
//     type: SET_FILTER,
//     payload: filter,
//   }
// }
