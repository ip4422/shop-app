import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Authorize = (WrappedComponent) => {
  class WithAuthorize extends Component {
    render() {
      const { isAuthorized } = this.props
      if (!isAuthorized) {
        return <Redirect to={{
          pathname: '/login',
          state: { from: this.props.location },
        }} />
      }
      return <WrappedComponent {...this.props} />
    }

  }

  WithAuthorize.propTypes = {
    isAuthorized: PropTypes.bool,
  }

  const mapStateToProps = (state) => (
    {
      isAuthorized: Boolean(state.session.user)
    }
  )

  return connect(mapStateToProps)(WithAuthorize)
}

export default Authorize