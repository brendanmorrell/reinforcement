import React from 'react';
import { connect } from 'react-redux';

import { logIn } from '../redux/actions/authenticationActions.js';

const LoginPage = ({ logIn, error, authenticating }) => {
  return (
    <div>
      <button onClick={() => logIn()}>Login</button>
      {error && <h3>Login unsuccessful: {error}</h3>}
      {authenticating && <h3>authenticating...</h3>}
    </div>
  );
};

const mapStateToProps = ({ authentication: { error, authenticating } }) => ({
  error,
  authenticating,
});
export default connect(
  mapStateToProps,
  { logIn }
)(LoginPage);
