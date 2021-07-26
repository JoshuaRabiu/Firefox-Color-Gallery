import React from 'react';
import Home from './containers/Home';
import { About } from './components/About';
import { Switch, Route } from 'react-router-dom';
import './style/Gallery.css';
import GitHub from './images/GitHub.png';
import { Link } from 'react-router-dom';
import './App.css';

export const App = () => (
  <div>
    <header>
    <Link to="/">
      <h2>Firefox Color Gallery</h2>
    </Link>	
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/joshrabiu/Firefox-color-gallery">
        <img target="_blank" rel="noopener noreferrer" className="github right" alt="GitHub" src={GitHub} />
      </a>
      <Link to="/about">
        <h4 className="right about">About</h4>
      </Link>

      <label className="submit right">
        <Link to="/upload">
          <p>Upload Theme</p>
        </Link>
      </label>
    </header>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* Lets the Home container handle the Upload Component's props */}
      <Route path="/upload" render={() => <Home showUpload={true} />} />
    </Switch>
  </div>
);
