import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles
import App from './App'; // Your main React component
import { Provider } from 'react-redux'; // Import Redux Provider
import store from '/workspaces/crypto-price-tracker/crypto-trackercd/src/store.js'; // Import your configured Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App component with the Redux Provider */}
    <App />
  </Provider>,
  document.getElementById('root') // Render the app into the root div defined in public/index.html
);
 App