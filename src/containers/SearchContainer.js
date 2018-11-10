import { connect } from 'react-redux'
import { logIn } from '../actions/sessionActions'
import Search from '../components/Search'

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, callback) => dispatch(logIn(params, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)