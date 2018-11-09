import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Authorize = (WrappedComponent) => {
  class WithAuthorize extends Component {
    render() {
      const { isAuthorized } = this.props
      if (!isAuthorized) {
        return <Redirect to='/login' />
      }
      return <WrappedComponent {...this.props} />
    }

  }

  WithAuthorize.protoTypes = {
    isAuthorized: PropTypes.bool,
  }

  const mapStateToProps = (state) => (
    {
      isAuthorized: Boolean(state.user)
    }
  )

  return connect(mapStateToProps)(WithAuthorize)
}

export default Authorize