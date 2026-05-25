import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className="relative bg-[#0d1117] border-t border-white/10 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none"/>
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Start Exploring Today</h2>
          <p className="text-slate-400 mb-8 text-lg">Find the perfect media for your projects.</p>
          <Link to="/home">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25">
              Explore Now
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-[#0a0d12] border-t border-white/5 py-10 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-white font-bold text-lg bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">AlamMedia</h3>
            <p className="text-slate-500 text-sm mt-1 max-w-xs">The premium destination for visual storytelling. Empowering creators worldwide.</p>
          </div>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">License Agreement</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-slate-600 text-sm">© 2024 AlamMedia. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer