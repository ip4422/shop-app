import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/sessionActions'
import Login from '../components/Login'

//TODO: переназвать LoginPage папку переименовать в Pages
class LoginPage extends React.Component {
  render() {
    const { user } = this.props
    if (user.email) {
      return (
        <div className='container'>
          <h2>You are logged in, {user.email}</h2>
        </div>

      )
    }
    return <Login {...this.props} />
  }
}

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, callback) => dispatch(logIn(params, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)