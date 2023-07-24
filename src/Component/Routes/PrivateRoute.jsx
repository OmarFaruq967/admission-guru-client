import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import LoadingSpinners from '../Shared/LoadingSpinners/LoadingSpinners'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <LoadingSpinners />
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
