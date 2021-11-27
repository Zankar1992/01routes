import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
// import Home from './components/home';
// import Post from './components/post';
// import Profile from './components/profile';


ReactDOM.render(
  <BrowserRouter>
    {/* <Switch>
    <Route exact path='/home' component={Home} />
    <Route exact path='/post' component={Post} />
    <Route exact path='/profile' component={Profile} />
    </Switch> */}
    <App />
  </BrowserRouter>,
  document.getElementById('root'));