import React from 'react'
import PropTypes from 'prop-types'

import { CardContainer, FiltersContainer } from '../../components'

export class Search extends React.Component {
  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        {items && <FiltersContainer />}
        <div className='container'>
          {items &&
            items.map(item =>
              !item.isFiltered ? (
                <CardContainer item={item} key={item.id} />
              ) : (
                ''
              )
            )}
        </div>
      </React.Fragment>
    )
  }
}

Search.propTypes = {
  items: PropTypes.array.isRequired,
}
