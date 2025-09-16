import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Bell, 
  User, 
  Search, 
  Briefcase, 
  Building,
  ChevronDown
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import Button from '../ui/Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsProfileOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white fixed w-full top-0 z-50 py-5">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex justify-between items-center h-[95px] bg-white rounded-2xl shadow-lg px-8 mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
              <Briefcase className="mr-2" size={32} />
              TalentHub
            </Link>
          </div>

          {/* Desktop Menu - Center Items */}
          <div className="hidden md:flex items-center space-x-8 flex-grow justify-center">
            <Link 
              to="/about" 
              className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/jobs" 
              className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                isActive('/jobs') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Jobs
            </Link>
          </div>

          {/* Desktop Menu - Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to={user.role === 'employer' ? '/dashboard/employer' : '/dashboard/applicant'} 
                  className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                    location.pathname.includes('/dashboard') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Dashboard
                </Link>
                <button className="text-gray-700 hover:text-blue-600 p-2 relative">
                  <Bell size={24} />
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    3
                  </span>
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-600 p-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border">
                      <User size={20} />
                    </div>
                    <span className="ml-2 text-lg font-medium">{user.name}</span>
                    <ChevronDown size={20} className="ml-1" />
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 border border-gray-200 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-base font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <Link 
                        to="/profile" 
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Profile Settings
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2">
                  Login
                </Link>
                <Link to="/register">
                  <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white rounded-2xl shadow-xl mx-4 overflow-hidden">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link 
                to="/about" 
                className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                  isActive('/contact') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/jobs" 
                className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                  isActive('/jobs') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Jobs
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to={user.role === 'employer' ? '/dashboard/employer' : '/dashboard/applicant'} 
                    className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                      location.pathname.includes('/dashboard') 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="px-4 py-3 flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="text-base font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <Link 
                      to="/profile" 
                      className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <Link 
                    to="/login" 
                    className="block px-4 py-3 text-center text-lg font-medium text-gray-700 hover:text-blue-600 rounded-lg border border-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="block px-4 py-3 text-center text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar