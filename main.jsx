import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
