import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppTest from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <AppTest/>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
