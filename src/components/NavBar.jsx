import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-teal-800 px-6 py-4 shadow-md text-white font-bold">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#14B8A6" />
            <path d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V15C16 16.1046 15.1046 17 14 17H10C8.89543 17 8 16.1046 8 15V12Z" fill="white"/>
            <path d="M12 7L14 9H10L12 7Z" fill="white"/>
            <circle cx="10" cy="13" r="1" fill="#14B8A6"/>
            <circle cx="14" cy="13" r="1" fill="#14B8A6"/>
          </svg>
          <span className="text-xl font-bold text-white hover:text-teal-200 transition-colors duration-300">
            Mentora AI
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className={`${
              location.pathname === '/' 
                ? 'text-teal-200 border-b-2 border-teal-200' 
                : 'text-white'
            } hover:text-teal-200 transition-all duration-300 hover:border-b-2 hover:border-teal-200 py-1`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              location.pathname === '/about' 
                ? 'text-teal-200 border-b-2 border-teal-200' 
                : 'text-white'
            } hover:text-teal-200 transition-all duration-300 hover:border-b-2 hover:border-teal-200 py-1`}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className={`${
              location.pathname === '/products' 
                ? 'text-teal-200 border-b-2 border-teal-200' 
                : 'text-white'
            } hover:text-teal-200 transition-all duration-300 hover:border-b-2 hover:border-teal-200 py-1`}
          >
            Products
          </Link>
          <Link
            to="/contactus"
            className={`${
              location.pathname === '/contactus' 
                ? 'text-teal-200 border-b-2 border-teal-200' 
                : 'text-white'
            } hover:text-teal-200 transition-all duration-300 hover:border-b-2 hover:border-teal-200 py-1`}
          >
            Contact Us
          </Link>
          
          {/* Sign In Button */}
          <button className="bg-white text-teal-800 px-4 py-2 rounded-lg hover:bg-teal-100 transition-colors duration-300 transform hover:scale-105">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
