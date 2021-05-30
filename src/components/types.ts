import { SyntheticEvent, MouseEventHandler, ChangeEventHandler } from 'react'
import { TFilter } from '../reducers/types'
import { TProductItem } from '../reducers/types'

export interface IPasswordFieldProps {
  caption: string
  name: string
  onChange: (event: SyntheticEvent) => void
  value: string
}

export interface IEmailFieldProps {
  onChange: (event: SyntheticEvent) => void
  value: string
}

export interface IDatePickerProps {
  onDateChange: (date: moment.Moment | null) => void
  onFocusChange: (arg: { focused: boolean }) => void
  focused?: boolean
  date?: moment.Moment | null
  id: string
  caption?: string
}

export interface ICheckBoxProps {
  caption?: string
  name?: string
  value?: string | boolean
  onChange: (value: boolean) => void
  isLarge?: boolean
}

export interface IButtonProps {
  caption?: string
  width?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface IAmountProps {
  caption?: string
  name?: string
  onChange: (value: string) => void
}

export interface INavBarItemProps {
  to?: string
  caption?: string
}

export interface IAmountProps {
  caption?: string
  name?: string
  onChange: (value: string) => void
}

export interface IFiltersProps {
  filter?: TFilter
  colors?: string[]
  onChange: (fieldName: string) => <T>(value: T) => void
}

export interface IFiltersContainerProps {
  setFilter: <T>(items: T) => any
  filter: TFilter
  colors: string[]
}

export interface IDropDownProps {
  id?: string
  caption?: string
  items: string[]
  name?: string
  onChange: (value: string) => void
}

export interface IDropDownItemProps {
  value?: string
}

export interface IDropDownItemsProps {
  id?: string
  name?: string
  items: string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export interface IDropDownLayoutProps {
  id?: string
  caption?: string
  name?: string
  items: string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export interface ICardProps {
  onChange: (value: boolean) => void
  item: TProductItem
}

export interface ICardAvatarProps {
  imageSrc?: string
  name?: string
}

export interface ICardContentItemProps {
  caption?: string
  value?: string
}

export interface ICardContainerProps {
  item: TProductItem
  key: string
  setInStock: <T>(item: T) => any
}
