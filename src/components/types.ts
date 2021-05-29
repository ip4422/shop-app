import { SyntheticEvent } from 'react'

export interface IPasswordFieldProps {
  caption: string
  name: string
  onChange: (event: SyntheticEvent) => void
  value: string
}
