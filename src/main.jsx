import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import Userloginstore from './context/Userloginstore.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Userloginstore>
    <App />
  </Userloginstore>,
)
