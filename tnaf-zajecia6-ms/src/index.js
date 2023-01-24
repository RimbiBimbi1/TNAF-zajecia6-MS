import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={'App-header'}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </div>
);
