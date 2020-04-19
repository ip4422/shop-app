import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setFilter } from '../../actions/itemsActions'
import { Filters } from './Filters'

class FiltersContainer extends React.Component {
  handleChange = fieldName => value => {
    this.props.setFilter({ [fieldName]: value })
  }

  render() {
    return <Filters {...this.props} onChange={this.handleChange} />
  }
}

FiltersContainer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
}

const mapStateToProps = ({ productStore, sessionStore }) => ({
  colors: productStore.colors,
  filter: productStore.filter,
  errorMsg: sessionStore.errorMsg,
})

const mapDispatchToProps = {
  setFilter: items => setFilter(items),
}

const WrappedFiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer)
export { WrappedFiltersContainer as FiltersContainer }
