import React, { useContext } from 'react'
import UserContext from "../contexts/userContext";
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
  const userCtx = useContext(UserContext)

  return userCtx.userData ? <Outlet /> : <Navigate to='/login'/>
}

export default ProtectedRoute
