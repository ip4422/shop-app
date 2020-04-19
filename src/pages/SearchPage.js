import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectItems } from '../reducers/productStore'
import { CardContainer, FiltersContainer } from '../components'

// TODO: split layout
class SearchPage extends React.Component {
  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        {items && <FiltersContainer {...this.props} />}
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

SearchPage.propTypes = {
  items: PropTypes.array.isRequired,
}

const mapStateToProps = ({ productStore, sessionStore }) => ({
  items: selectItems(productStore),
})

export default connect(mapStateToProps)(SearchPage)
