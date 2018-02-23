import React from 'react';
import { injectGlobal } from 'emotion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import IssuePage from './components/IssuePage';

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: #ebeff1;
  }
`;

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:username/:repo/issue/:number" component={IssuePage} />
    </div>
  </Router>
);

export default App;
