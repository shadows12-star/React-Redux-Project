import React from 'react'
import SearchBar from './SearchBar'
import Tabs from './Tabs'
import ResultGrid from './ResultGrid'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {setSearchQuery, setError,setSearchQueryResults, setLoading} from '../Redux/Features/searchslice'

const Home = () => {
  const { loading, query } = useSelector((state) => state.search)
  
   const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
        <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-6">
            Discover Amazing Photos, Videos & GIFs
          </h1>

          <p className="text-lg opacity-90 mb-10">
            Search millions of high quality media assets instantly.
          </p>

      

          <div className="mt-8">
          
          </div>

        </div>
      </section>
      
      <Tabs />
      {/* Trending Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Trending Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[
  'Nature',
  'Technology',
  'Animals',
  'Travel',
  'Food',
  'People',
  'Architecture',
  'Sports'
].map((item) => (

  <button
    key={item}

    disabled={loading}

    onClick={() => {

      if(query !== item){
        dispatch(setSearchQuery(item))
      }

    }}

    className={`
      bg-white p-8 rounded-2xl shadow
      text-xl font-semibold text-center
      transition

      ${loading
        ? 'opacity-50 cursor-not-allowed'
        : 'hover:scale-105'
      }
    `}
  >
    {item}
  </button>

))}

        </div>
      </section>
   
      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Popular Results
          </h2>

          <button className="text-purple-600 font-semibold">
            View More
          </button>

        </div>

        <ResultGrid />

      </section>

      {/* CTA */}
      <Footer/>

    </div>
  )
}

export default Home