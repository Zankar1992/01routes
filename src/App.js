import React from 'react';
import { BrowserRouter, Link , Switch, Route } from "react-router-dom";
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';
import Error from './components/Error';


const App = () => {
  const Name = () => {
    return <h1>Hello,I am Name page </h1> 
  }
  return (  
    <BrowserRouter>
      <div> 
        <Link to="/home">Home</Link>-
        <Link to="/post">Post</Link>-
        <Link to="/profile">Profile</Link>
        <hr/>
        <Switch>  
        <Route exact path='/'component={Home}/>
        <Route path='/post'component={Post}/>
        <Route path='/profile'component={Profile}/>
        <Route exact path='/profile/Name'component={Name}/>
        <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>         
  )
}
export default App;
