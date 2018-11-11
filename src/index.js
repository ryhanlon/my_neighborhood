import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import startServiceWorker from './components/startServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
startServiceWorker();


