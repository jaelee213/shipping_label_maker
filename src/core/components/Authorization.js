import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';

const Authorization = (WrappedComponent, authorizedUsers) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        attempt: 0,
      }
    }

    handleSubmit = (user) => {
      const newState = { ...this.state };
      if (user.name === authorizedUsers.username && user.password === authorizedUsers.password) {
        newState.isLoggedIn = true;
        newState.attempt = 0; // reset the number of attempts
      } else {
        newState.attempt += 1;
      }
      this.setState(newState);
    }

    render() {
      const { isLoggedIn, attempt } = this.state;
      if (isLoggedIn) {
        return <WrappedComponent />;
      } else {
        return <Login handleSubmit={this.handleSubmit} attempt={attempt} />;
      }
    }
  }
};

Authorization.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
  authorizedUsers: PropTypes.object.isRequired,
}

export default Authorization;
