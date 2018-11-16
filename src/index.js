import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { unregister } from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
