import React from 'react'

import { CardContainer, FiltersContainer } from '../../components'
import { ProductItem } from '../../reducers/types'

interface SearchProps {
  items: ProductItem[]
}

export const Search = ({ items }: SearchProps): JSX.Element => {
  return (
    <React.Fragment>
      {items && <FiltersContainer />}
      <div className='container'>
        {items &&
          items.map(item =>
            !item.isFiltered ? <CardContainer item={item} key={item.id} /> : ''
          )}
      </div>
    </React.Fragment>
  )
}
