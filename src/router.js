// Router.js
import React from 'react';
import Login from './login/login';
import Register from './register/register';
import Home from './home/home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const RouterMap = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home  />} />
    </Routes>
  </Router>
}

export default RouterMap;