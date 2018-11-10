import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/sessionActions'
import Logout from '../components/Logout'

class LogoutContainer extends React.Component {
  render() {
    const { logOut, user } = this.props
    return <Logout logOut={logOut} user={user}/>
  }
}


const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)