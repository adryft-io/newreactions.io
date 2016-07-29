import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../node_modules/skeleton-css/css/skeleton.css';
import '../node_modules/skeleton-css/css/normalize.css';
import '../node_modules/animate.css/animate.min.css';
import './css/styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
// ERROR in ./~/css-loader!./app/css/styles.css
// css:5:1: Unknown word
