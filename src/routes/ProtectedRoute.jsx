import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Auth from '../utils/Auth'

const ProtectedRoute = () => {
  const [title, setTitle] = useState('celengin')
  const {pathname} = useLocation()
  
  useEffect(() =>{
    const paths = pathname.split('/')
    if(paths.length === 2){
      let [ , indicator] = paths
      indicator = indicator.charAt(0).toUpperCase() + indicator.slice(1)
      setTitle(`${indicator} - celengin`)
    }
    if(pathname === '/'){
      setTitle('Home - celengin')
    }
    if(paths.length === 3){
      setTitle('Detail keinginan - celengin')
    }
  },[pathname])

  if(Auth.isAuthorized()){
    return <Navigate to='/dashboard' replace />
  }
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Outlet />
    </>
  );
}

export default ProtectedRoute