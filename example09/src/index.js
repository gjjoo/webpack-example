import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/imageViewer.scss';
import ryan from './assets/images/ryan.jpg';

const App = () => (
  <div>
    <h2>HI~!</h2>
    <img className="image" src={ryan} alt="ryan" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
