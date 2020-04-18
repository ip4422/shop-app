import React from 'react'
import { connect } from 'react-redux'
import { setItems, setFilter } from '../actions/itemsActions'
import { selectItems } from '../reducers/productStore'
import Filters from '../components/Filters'
import { Card } from '../components/Card'

class SearchPage extends React.Component {
  handleChange = id => event => {
    this.props.setItems({
      id: id,
      inStock: event.currentTarget.checked,
    })
  }

  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        {items && <Filters {...this.props} />}
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
  filter: productStore.filter,
  items: selectItems(productStore),
  errorMsg: sessionStore.errorMsg,
})

const mapDispatchToProps = {
  setFilter: items => setFilter(items),
  setItems: items => setItems(items),
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
