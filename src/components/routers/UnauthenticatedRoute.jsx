import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)}
  />
);

const mapStateToProps = ({ authentication }) => ({
  isAuthenticated: authentication.isAuthenticated,
});

export default connect(mapStateToProps)(UnauthenticatedRoute);
