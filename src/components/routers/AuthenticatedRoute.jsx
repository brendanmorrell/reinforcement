import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const mapStateToProps = ({ authentication }) => ({
  isAuthenticated: !!authentication.isAuthenticated,
});

export default connect(mapStateToProps)(AuthenticatedRoute);

// {...rest}

// props =>
//       isAuthenticated ? (
//         <div>
//           <h2>authenticated route</h2>
//         </div>
//       ) : (
//         <Redirect to="/" />
//       )
//     }
