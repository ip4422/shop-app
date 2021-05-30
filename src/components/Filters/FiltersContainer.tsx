import React from 'react'
import { connect } from 'react-redux'

import { setFilter } from '../../actions/itemsActions'
import { Filters } from './Filters'
import { IFiltersContainerProps } from '../types'
import { IStore } from '../../reducers/types'

const FiltersContainer = ({
  colors,
  filter,
  setFilter,
}: IFiltersContainerProps) => {
  const handleChange =
    (fieldName: string): (<T>(value: T) => any) =>
    value => {
      setFilter({ [fieldName]: value })
    }

  return <Filters colors={colors} filter={filter} onChange={handleChange} />
}

const mapStateToProps = ({ productStore, sessionStore }: IStore) => ({
  colors: productStore.colors,
  filter: productStore.filter,
})

const mapDispatchToProps = {
  setFilter: (items: any): any => setFilter(items),
}

const WrappedFiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer)
export { WrappedFiltersContainer as FiltersContainer }
