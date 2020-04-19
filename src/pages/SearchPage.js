import React from 'react'
import { connect } from 'react-redux'
import { setInStock } from '../actions/itemsActions'
import { selectItems } from '../reducers/productStore'
import { Card, FiltersContainer } from '../components'

class SearchPage extends React.Component {
  handleChange = id => event => {
    this.props.setInStock({
      id: id,
      inStock: event.currentTarget.checked,
    })
  }

  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        {items && <FiltersContainer {...this.props} />}
        <div className='container'>
          {items &&
            items.map(item =>
              !item.isFiltered ? (
                <Card
                  item={item}
                  key={item.id}
                  onChange={this.handleChange(item.id)}
                />
              ) : (
                ''
              )
            )}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ productStore, sessionStore }) => ({
  colors: productStore.colors,
  items: selectItems(productStore),
  errorMsg: sessionStore.errorMsg,
})

const mapDispatchToProps = {
  setInStock: items => setInStock(items),
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
