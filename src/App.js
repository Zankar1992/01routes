import React from 'react';
import { useRoutes } from "react-router-dom";
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/post", element: <Post /> },
    { path: "/profile", element: <Profile /> },
  ]);
  return routes;
};

export default App;
