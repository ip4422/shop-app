import React from 'react'
import { connect } from 'react-redux'

import { setFilter } from '../../actions/itemsActions'
import { Filters } from './Filters'
import { Store, Filter } from '../../reducers/types'

interface FiltersContainerProps {
  setFilter: <T>(items: T) => any
  filter: Filter
  colors: string[]
}

const FiltersContainer = ({
  colors,
  filter,
  setFilter,
}: FiltersContainerProps) => {
  const handleChange =
    (fieldName: string): (<T>(value: T) => any) =>
    value => {
      setFilter({ [fieldName]: value })
    }

  return <Filters colors={colors} filter={filter} onChange={handleChange} />
}

const mapStateToProps = ({ productStore, sessionStore }: Store) => ({
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
