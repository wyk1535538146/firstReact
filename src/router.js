// Router.js
import React from 'react';
import Login from './login/login';
import Register from './register/register';
import Home from './home/home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//拦截器
const Authroute = ({children}) => {
  const authed = localStorage.getItem('login')
  return authed === 'true' ? (children) : (<Navigate to = '/' replace />)   //跳转到登录
}

const RouterMap = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={
        <Authroute>
          <Home  />
        </Authroute>
      } />
    </Routes>
  </Router>
}




export default RouterMap;