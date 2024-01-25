import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Scrol from './components/Scrol'

function MainLayouth() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
      <Scrol/>
      
    </>
  )
}

export default MainLayouth
