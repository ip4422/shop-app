// import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/sessionActions'
import Login from '../components/Login'

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, callback) => dispatch(logIn(params, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)