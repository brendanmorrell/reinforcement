import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AppRouter, { history } from './routers/AppRouter.jsx';
import { logIn } from '../redux/actions/authenticationActions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const [cookie] = document.cookie
      .split(';')
      .filter(x => x.includes('uuid'))
      .map(x => x.replace(/uuid=/, '').trim());

    let data = JSON.stringify({ uuid: cookie });
    axios
      .post('http://localhost:3000/is-authenticated', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => {
        if (data.isAuthenticated) {
          this.props.logIn();
        }
      });
  }
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default connect(
  null,
  { logIn }
)(App);
