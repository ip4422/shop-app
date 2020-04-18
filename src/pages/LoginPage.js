import { connect } from 'react-redux'
import { logIn, signUp } from '../actions/sessionActions'
import Login from '../components/Login'

const mapStateToProps = ({ sessionStore }) => ({
  isAuthorized: sessionStore.user.email !== '',
  errorMsg: sessionStore.errorMsg,
  user: sessionStore.user,
  admin: sessionStore.admin,
})

const mapDispatchToProps = {
  logIn: (params, callback) => logIn(params, callback),
  signUp: (params, callback) => signUp(params, callback),
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
