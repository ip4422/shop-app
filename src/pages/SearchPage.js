import React from 'react'
import { connect } from 'react-redux'
import { setItems, setFilter } from '../actions/itemsActions';
import { selectItems } from '../reducers/productStore';
import Filters from '../components/Filters'
import Card from '../components/Card/Card'

class SearchPage extends React.Component {
  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        {items && <Filters {...this.props} />}
        <div className='container'>
          {items && items.map(item => (
            !item.isFiltered ? <Card item={item} key={item.id} onChange={this.props.setItems}/> : ''
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  colors: state.productStore.colors,
  filter: state.productStore.filter,
  items: selectItems(state),
  errorMsg: state.session.errorMsg,
})

const mapDispatchToProps = dispatch => ({
  setFilter: (items) => dispatch(setFilter(items)),
  setItems: (items) => dispatch(setItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)