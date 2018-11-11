import React, { Component } from 'react'
import Filters from './Filters'
import Card from './Card'
import PropTypes from 'prop-types'

class Search extends Component {
  // const Search = ({ ...rest }) => {
  // return (
  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        <Filters {...this.props} />
        <div className='container'>
          {items.map(item => <Card item={item} key={item.name} />)}
        </div>
      </React.Fragment>
    )
  }
}

Search.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
}

export default Search