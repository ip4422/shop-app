import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectItems } from '../../reducers/productStore'
import { Search } from './Search'

class SearchPage extends React.Component {
  render() {
    const { items } = this.props
    return <Search items={items} />
  }
}

SearchPage.propTypes = {
  items: PropTypes.array.isRequired,
}

const mapStateToProps = ({ productStore, sessionStore }) => ({
  items: selectItems(productStore),
})
const WrappedSearchPage = connect(mapStateToProps)(SearchPage)
export { WrappedSearchPage as SearchPage }
