import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import { setItems } from '../actions/itemsActions';

class SearchContainer extends React.Component {
  render() {
    // const { items, user, colors, errorMsg, setItems } = this.props
    return <Search {...this.props}/>
    // return <Search items={items} colors={colors} errorMsg={errorMsg} user={user} setItems={setItems}/>
  }
}

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
  items: state.session.items,
  colors: state.session.colors,
})

const mapDispatchToProps = dispatch => ({
  setItems: (items) => dispatch(setItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)