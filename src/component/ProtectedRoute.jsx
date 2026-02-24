
import { useContext } from 'react'
import { userContext } from '../context/context.js'
import { Navigate, Outlet } from 'react-router'

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useContext(userContext)

  if (loading) {
    return <p>Authenticating</p>
  }

  // if user is authenticated render child routes via <Outlet />
  // otherwise redirect to login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
