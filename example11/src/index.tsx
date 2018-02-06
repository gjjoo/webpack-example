import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './assets/styles/imageViewer.scss';

const App: React.SFC = () => (
  <div>
    <h2>HI~!</h2>
    <img className="image" src={require('./assets/images/ryan.jpg')} alt="ryan" />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
