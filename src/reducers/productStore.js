import moment from 'moment'
import { getBool } from '../helpers/service'
import { SET_ITEM, SET_FILTER, SET_INSTOCK } from '../actions/itemsActions'
import { colors, items, filter, cart } from './initialStore.json'

const initialState = {
  colors,
  items,
  filter,
  cart,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? {
                ...action.payload,
              }
            : { ...item }
        ),
      }

    case SET_INSTOCK:
      return {
        ...state,
        items: state.items.map(item => ({
          ...item,
          inStock:
            item.id === action.payload.id
              ? action.payload.inStock
              : item.inStock,
        })),
      }

    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      }

    default:
      return state
  }
}

// selector

function applyFilter(item, filter) {
  let filtered_item = item
  filtered_item.isFiltered = false

  // compare date interval
  if (
    moment(item.issueDate, 'DD-MM-YYYY').isBefore(filter.fromDate) ||
    moment(item.issueDate, 'DD-MM-YYYY').isAfter(filter.toDate)
  ) {
    filtered_item.isFiltered = true
    return filtered_item
  }

  // check inStockOnly property
  if (filter.inStockOnly && getBool(item.inStock) !== filter.inStockOnly) {
    filtered_item.isFiltered = true
    return filtered_item
  }

  // check price range
  if (
    (filter.priceFrom && Number(item.price) < Number(filter.priceFrom)) ||
    (filter.priceTo && Number(item.price) > Number(filter.priceTo))
  ) {
    filtered_item.isFiltered = true
    return filtered_item
  }

  // check color
  if (filter.color && filter.color !== item.color) {
    filtered_item.isFiltered = true
    return filtered_item
  }
  return filtered_item
}

function getFilteredItems(items, filter) {
  return items.map((item, index) => applyFilter(item, filter))
}

export function selectItems(productStore) {
  return getFilteredItems(productStore.items, productStore.filter)
}
