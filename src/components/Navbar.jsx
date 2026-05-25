import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-purple-600">
          AlamMedia
        </h1>

        <div className="flex gap-6 font-medium">
       
          <Link to="/home">Home</Link>
          <Link to="/">Explore</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
  )
}

export default Navbar