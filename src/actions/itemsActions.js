export const SET_ITEMS = 'SET_ITEMS'

export function setItems(items) {
  return {
    type: SET_ITEMS,
    payload: items,
  }
}