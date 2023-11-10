import './App.css';
import React from 'react';
import Home from './Home'
import Navbar from './Navbar';
import Auth from './Auth';
function App() {
  const isLogin = Auth();
  return (
      isLogin ? <Home /> : <Navbar />
  );
}

export default App;
