import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  if(children){
    return(
      <>
      <Navbar />
        {children}
      <Footer />
      </>
    )
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
