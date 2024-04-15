import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-200">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a className="block text-teal-600" href="#">
        <span className="sr-only">Home</span>
      <span className='text-blue-500'>  E.C.H.O</span>
      </a>
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="about"> About </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to='echo'> Echo </NavLink>
            </li>
          </ul>
        </nav>
  
        <div className="flex items-center gap-4">
  
          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header