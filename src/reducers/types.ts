export type Filter = {
  fromDate: moment.Moment | null
  toDate: moment.Moment | null
  inStockOnly: boolean
  priceFrom: string | number
  proceTo: string | number
  color: string[]
}

export type ProductItem = {
  id: string
  name: string
  color: string
  issueDate: string
  price: string
  rating: string
  inStock: boolean
  image: string
  isFiltered: boolean
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
