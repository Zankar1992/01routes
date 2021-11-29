import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';
import Error from './components/Error';
import ProfilePost from './components/profile_post';
const App = () => {

  return (
    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
          <Link className="my-2 my-md-0 mr-md-3" />
          <Link className="p-2 text-dark" to="/">Home</Link>-
          <Link className="p-2 text-dark" to="/post">Post</Link>-
          <Link className="p-2 text-dark" to="/profile">Profile</Link>
        </div>
      </header>
      <Switch>
        {/* <Redirect from="/profile" to="/"/> */}
        <Route exact path='/' component={Home} />
        <Route path='/post' component={Post} />
        <Route path="/profile" component={Profile} exact />
        <Route path="/profile/post" component={ProfilePost} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
