import moment from 'moment'
import { getBool } from '../helpers/service'
import { SET_ITEMS, SET_FILTER, SET_INSTOCK } from '../actions/itemsActions'
import { colors, items } from './initialStore.json'
// "user": {
//   "email": "ya@ya.ru",
//   "password": "1234"
// },

const initialState = {
  colors,
  items,
  filter: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: state.items.map((item) => {
          return {
            ...item,
            inStock: item.id === action.payload.id
              ? action.payload.inStock : item.inStock,
          }
        })
      }

    case SET_INSTOCK:
      return {
        ...state,
        items: state.items.map((item, index) => {
          return {
            ...item,
            inStock: action.payload[index].inStock,
          }
        })
      }

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }

    // case SET_FILTER:
    // return {
    //   ...state,
    //   items: state.items.map((item, index) => {
    //     return {
    //       ...item,
    //       isFiltered: action.payload[index].isFiltered,
    //     }
    //   })
    // }

    default:
      return state;
  }
}

// селектор

function applyFilter(item, filter) {
  let filtered_item = item
  filtered_item.isFiltered = false

  // compare date interval
  const itemDate = moment(item.issueDate, 'MM-DD-YYYY')
  if (filter.fromDate && itemDate.diff(filter.fromDate) < 0) {
    filtered_item.isFiltered = true
    return filtered_item
  } else if (filter.toDate && filter.toDate.diff(itemDate) < 0) {
    filtered_item.isFiltered = true
    return filtered_item
  }

  // check inStockOnly property
  if (filter.inStockOnly && getBool(item.inStock) !== filter.inStockOnly) {
    filtered_item.isFiltered = true
    return filtered_item
  }

  // check price range
  if (filter.priceFrom && (item.price < filter.priceFrom)) {
    filtered_item.isFiltered = true
    return filtered_item
  } else if (filter.priceTo && (item.price > filter.priceTo)) {
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

function getItems(items, filter) {
  return items.map((item, index) => applyFilter(item, filter))
}

//TODO: взять из state все карточки. взять фильтры из state(отправлять их диспатчем).  применить их к списку карточек. вернуть получившийся список из функции
// экспортим
export function selectItems(state) {
  return getItems(state.productStore.items, state.productStore.filter)
}

