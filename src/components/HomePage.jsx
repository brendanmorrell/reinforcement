import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/authenticationActions.js';

const HomePage = ({ logOut, uuid }) => (
  <div>
    <h1>Hello. Your userID is {uuid}</h1>
    <button onClick={() => logOut()}>Logout</button>
  </div>
);

const mapDispatchToProps = dispatch => ({ logOut: () => dispatch(logOut()) });
const mapStateToProps = ({ authentication }) => ({ uuid: authentication.isAuthenticated });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
