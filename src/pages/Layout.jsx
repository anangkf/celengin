import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  const keinginanLoading = useSelector(state => state.keinginan.loading)
  const templateLoading = useSelector(state => state.template.loading)
  const showLoader = keinginanLoading || templateLoading
  
  if(children){
    return(
      <>
      {showLoader && <Loader />}
      <Navbar />
        {children}
      <Footer />
      </>
    )
  }
  return (
    <div>
      {showLoader && <Loader />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
