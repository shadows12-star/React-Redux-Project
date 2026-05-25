import React from 'react'
import SearchBar from './SearchBar'
import Tabs from './Tabs'
import ResultGrid from './ResultGrid'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setSearchQuery, setError, setSearchQueryResults, setLoading } from '../Redux/Features/searchslice'

const categoryImages = {
  Nature: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
  Technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
  Animals: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&q=80',
  Travel: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
  Food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  People: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
  Architecture: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80',
  Sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80',
}

const Explore = () => {
  const { loading, query } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80')] bg-cover bg-center"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/50 to-[#0d1117]"/>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Discover Amazing
          </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 bg-clip-text text-transparent">
            Photos, Videos & GIFs
          </h1>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            The world's most talented creators share their work on AlamMedia. Search millions of high-quality media assets instantly.
          </p>

       

      
          <div className="bar">
              <SearchBar />
          </div>
       
          <div className="mt-8">
            <Tabs />
          </div>
        </div>
      </section>

     

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Popular Results</h2>
          <button className="text-sm text-slate-400 hover:text-white transition-colors">
            View More
          </button>
        </div>
        <ResultGrid />
      </section>

      <Footer />
    </div>
  )
}

export default Explore