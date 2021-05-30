export type Filter = {
  fromDate: moment.Moment | null
  toDate: moment.Moment | null
  inStockOnly: boolean
  priceFrom: string | number | null
  priceTo: string | number | null
  color: string | null
}

export type ProductItem = {
  id: string
  name: string
  color: string
  issueDate: string
  price: string
  rating: string
  inStock: boolean | string
  image: string
  isFiltered: boolean | string
}

export interface ProductStore {
  colors: string[]
  items: ProductItem[]
  filter: Filter
  cart: ProductItem[]
}

export type User = {
  email: string
  password: string
}

export interface SessionStore {
  user: User
  admin: User
  errorMsg: string
}

export interface Store {
  productStore: ProductStore
  sessionStore: SessionStore
}

// export type ItemAction = {
//   type: string
//   payload: Partial<ProductItem> & Partial<Filter>
// }
