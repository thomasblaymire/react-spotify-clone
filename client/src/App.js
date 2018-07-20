import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { injectGlobal } from 'styled-components';

import DashboardPage from './components/Pages/Dashboard';
import ProfilePage from './components/Pages/Profile';
import ArtistPage from './components/Pages/Artist';

injectGlobal`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Nunito', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }

  .App {
    margin-left: 300px;
    background: #f6f7fb;
    height: 1000vh;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/artist" component={ArtistPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
