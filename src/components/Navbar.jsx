import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const navClass = ({ isActive }) => `
    relative pb-1 transition-colors duration-300

    ${
      isActive
        ? 'text-white'
        : 'text-slate-300 hover:text-white'
    }

    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full
    after:origin-left after:scale-x-0
    after:bg-purple-500
    after:transition-transform after:duration-300

    ${
      isActive
        ? 'after:scale-x-100'
        : 'hover:after:scale-x-100'
    }
  `

  return (

    <nav className="flex items-center justify-between px-10 py-4 bg-[#0d1117]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">

      {/* LOGO */}

      <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
        AlamMedia
      </h1>

      {/* NAV LINKS */}

      <div className="flex gap-8 font-medium text-sm">

        <NavLink
          to="/home"
          className={navClass}
        >
          Home
        </NavLink>

        <NavLink
          to="/"
          className={navClass}
        >
          Explore
        </NavLink>

        <NavLink
          to="/collections"
          className={navClass}
        >
          Collections
        </NavLink>

        <NavLink
          to="/about"
          className={navClass}
        >
          About
        </NavLink>

      </div>

    </nav>

  )
}

export default Navbar