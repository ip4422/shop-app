import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectItems } from '../../reducers/productStore'
import { Search } from './Search'
import { ProductItem, Store } from '../../reducers/types'

interface SearchPageProps {
  items: ProductItem[]
}

const SearchPage = ({ items }: SearchPageProps): JSX.Element => {
  return <Search items={items} />
}

SearchPage.propTypes = {
  items: PropTypes.array.isRequired,
}

const mapStateToProps = ({ productStore, sessionStore }: Store) => ({
  items: selectItems(productStore),
})
const WrappedSearchPage = connect(mapStateToProps)(SearchPage)
export { WrappedSearchPage as SearchPage }
