import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore()

  // Chưa đăng nhập → redirect về trang login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Đã đăng nhập → cho vào
  return children
}

export default ProtectedRoute
