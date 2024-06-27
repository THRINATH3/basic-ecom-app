import React from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
function RootLayout() {
  return (
    <div>
        <Header></Header>
        <div style={{minHeight:"100vh"}}>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout