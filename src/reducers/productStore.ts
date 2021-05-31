import moment from 'moment'

import { getBool } from '../helpers/service'
import { SET_ITEM, SET_FILTER, SET_INSTOCK } from '../actions/itemsActions'
import { colors, items, filter, cart } from './initialStore.json'
import {
  ItemAction,
  InStockAction,
  FilterAction,
} from '../actions/itemsActions'
import { ProductStore, ProductItem, Filter } from './types'

const initialState: ProductStore = {
  colors,
  items: items as ProductItem[],
  filter: filter as Filter,
  cart,
}

const productStore = (
  state = initialState,
  action: ItemAction | InStockAction | FilterAction
): ProductStore => {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === (action.payload as ProductItem).id
            ? {
                ...(action.payload as ProductItem),
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
            item.id === (action.payload as ProductItem).id
              ? (action.payload as ProductItem).inStock
              : item.inStock,
        })),
      }

    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...(action.payload as Filter),
        },
      }

    default:
      return state
  }
}

// selector

function applyFilter(item: ProductItem, filter: Filter) {
  const filtered_item = item
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

function getFilteredItems(items: ProductItem[], filter: Filter) {
  return items.map((item: ProductItem) => applyFilter(item, filter))
}

export function selectItems(store: ProductStore): ProductItem[] {
  return getFilteredItems(store.items, store.filter)
}

export default productStore
