import { connect } from 'react-redux'
import { logIn, signUp } from '../actions/sessionActions'
import Login from '../components/Login'

const mapStateToProps = state => ({
  isAuthorized: state.sessionStore.user.email !== '',
  errorMsg: state.sessionStore.errorMsg,
  user: state.sessionStore.user,
  admin: state.sessionStore.admin,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, callback) => dispatch(logIn(params, callback)),
  signUp: (params, callback) => dispatch(signUp(params, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)