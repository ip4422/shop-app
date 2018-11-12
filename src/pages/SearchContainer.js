import React from 'react'
import { connect } from 'react-redux'
import { setItems } from '../actions/itemsActions';
import Filters from '../components/Filters'
import Card from '../components/Card'

class SearchPage extends React.Component {
  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        {items && <Filters {...this.props} />}
        <div className='container'>
          {items && items.map(item => <Card item={item} key={item.id} />)}
        </div>
      </React.Fragment>
    )
  }
}

//TODO: селектор использовать

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
  items: state.session.items,// вместо этого поставить selectCards(state) в state будут лежать и фильтры
  colors: state.session.colors,
})

const mapDispatchToProps = dispatch => ({
  setItems: (items) => dispatch(setItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)