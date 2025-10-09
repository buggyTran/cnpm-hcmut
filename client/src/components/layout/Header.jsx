import Logo from '../common/Logo'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='w-screen pt-2 sticky top-0 z-50 bg-white border-b border-[#E5E7EB]' >

      <div className='container mx-auto flex items-center justify-between h-16 px-10'>
        {/*Logo*/}
        <div >
          <NavLink to="/" >
            <Logo />
          </NavLink>
        </div>

        {/*Navigation */}
        <nav className="hidden md:flex items-center space-x-16 font-medium text-base text-neutral-900">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
          >
            Chương trình
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
          >
            Khám phá
          </NavLink>
        </nav>

        <NavLink to={'/login'}>
          <button className='btn-primary font-sans font-light'>Đăng nhập </button>
        </NavLink>

      </div>

    </header>

  )
}


