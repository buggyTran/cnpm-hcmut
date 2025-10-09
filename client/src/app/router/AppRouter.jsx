import { Route, Routes } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import MainLayout from '../../components/layout/MainLayout'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter