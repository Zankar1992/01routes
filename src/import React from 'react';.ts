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
        <hr/>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <Link className="py-2 text-dark" to="/home">Home</Link>-
        <Link className="py-2 text-dark" to="/post">Post</Link>-
        <Link className="py-2 text-dark" to="/profile">Profile</Link>
      </nav>
    </div>
        <Switch>  
        <Route exact path='/home'component={Home}/>
        <Route path='/post'component={Post}/>
        <Route exact path='/profile'component={Profile}/>
        <Route path='/profile/Name'component={Name}/>
        {/* <Route component={Error}/> */}
        </Switch>
      </div>
    </BrowserRouter>         
  )
}


export default App;
