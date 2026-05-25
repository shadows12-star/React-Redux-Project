import React from 'react'
import SearchBar from './SearchBar'
import Tabs from './Tabs'
import ResultGrid from './ResultGrid'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setSearchQuery, setError, setSearchQueryResults, setLoading,setPage,prevPage } from '../Redux/Features/searchslice'

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

const Home = () => {
  const { loading, query ,page} = useSelector((state) => state.search)
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

       

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400">
            <span>Trending:</span>
            {['Cyberpunk', 'Minimalism', 'Vaporwave', 'Aerial'].map(t => (
              <button
                key={t}
                onClick={() => dispatch(setSearchQuery(t))}
                className="hover:text-white transition-colors"
              >
                {t}
              </button>
            ))}
          </div>

       
        </div>
      </section>

      {/* Trending Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-end justify-between mb-3">
          <div>
            <h2 className="text-3xl font-bold text-white">Trending Categories</h2>
            <p className="text-slate-400 text-sm mt-1">Explore curated collections from around the globe.</p>
          </div>
  
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {['Nature', 'Technology', 'Animals', 'Travel', 'Food', 'People', 'Architecture', 'Sports'].map((item) => (
            <button
              key={item}
              disabled={loading}
              onClick={() => { if (query !== item) dispatch(setSearchQuery(item)) }}
              className={`relative rounded-2xl overflow-hidden h-48 group text-left transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <img
                src={categoryImages[item]}
                alt={item}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
              <span className="absolute bottom-4 left-4 text-white font-bold text-lg">{item}</span>
            </button>
          ))}
        </div>
      </section>
         
      {/* Results */}
         <div className="mt-8">
            <Tabs />
          </div>
      <section className="max-w-7xl mx-auto px-6 pb-16">
       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
  
  <h2 className="text-3xl font-bold text-white">
    Popular Results
  </h2>

  <div className="flex items-center gap-3">
    
    <button
      onClick={() => dispatch(prevPage())}
      className="px-4 py-2 rounded-xl bg-[#161b22] border border-slate-700 text-slate-300 hover:bg-[#21262d] hover:text-white transition-all duration-200"
    >
      Show Less
    </button>

    <button
      onClick={() => dispatch(setPage())}
      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-200"
    >
      Show More
        </button>

      </div>
    </div>
        <ResultGrid />
      </section>

      <Footer />
    </div>
  )
}

export default Home