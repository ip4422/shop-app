import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { PropTypes } from 'prop-types'

const Signup = (WrappedComponent) =>{
  class WithSignup extends Component{
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }

  WithSignup.propTypes = {
    isAuthorized: PropTypes.bool,
  }

  const mapStateToProps = (state) =>({
    isAuthorized: Boolean(state.session.user),
    isSignup: true,
  })

  return connect(mapStateToProps)(WithSignup)
}