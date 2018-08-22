import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';


const root = document.getElementById('app');
//require('./server/server/js')(root);
render(<App />, root);
