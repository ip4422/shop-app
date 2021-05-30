export type TFilter = {
  fromDate: moment.Moment | null
  toDate: moment.Moment | null
  inStockOnly: boolean
  priceFrom: string | number
  proceTo: string | number
  color: string[]
}

export type TProductItem = {
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

export interface IProductStore {
  colors: string[]
  items: TProductItem[]
  filter: TFilter
  cart: TProductItem[]
}

export type TUser = {
  email: string
  password: string
}

export interface ISessionStore {
  user: TUser
  admin: TUser
  errorMsg: string
}

export interface IStore {
  productStore: IProductStore
  sessionStore: ISessionStore
}
