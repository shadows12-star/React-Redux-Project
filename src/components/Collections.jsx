import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {addToCollection, clearCollection,   removeFromCollection} from '../Redux/Features/collectionslice'

const Collections = () => {

  const dispatch = useDispatch()
  const {items} = useSelector((state) => state.collection)

  

  // FILTERS
  const images =
    items.filter(item => item.type === 'photo')

  const videos =
    items.filter(item => item.type === 'video')

  const gifs =
    items.filter(item => item.type === 'gif')

 
  // CARD COMPONENT
  const renderSection = (title, data, color) => {

    if (items.length === 0) return null

    return (

      <div className='mb-14'>

        {/* SECTION HEADER */}

        <div className='flex items-center justify-between mb-6'>

          <h2 className={`text-3xl font-bold ${color}`}>
            {title}
          </h2>

          <span className='bg-white shadow px-4 py-2 rounded-full text-gray-700 font-medium'>
            {data.length} Items
          </span>

        </div>
        <div className="clear">
          <button
            onClick={() => {
              dispatch(clearCollection())
            }}
            className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
          >
            Clear Collections
          </button>
        </div>

        {/* GRID */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

          {data.map((result) => (

            <div
              key={result.id}
              className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300'
            >

              {/* IMAGE */}

              <div className='overflow-hidden bg-gray-200 h-60'>

                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className='w-full h-full object-cover hover:scale-110 transition duration-300'
                />

              </div>

              {/* CONTENT */}

              <div className='p-4'>

                <h3 className='text-lg font-semibold text-gray-800 truncate'>
                  {result.title}
                </h3>

                <p className='text-sm text-gray-500 capitalize mt-1'>
                  {result.type}
                </p>

                {/* BUTTONS */}

                <div className='flex gap-3 mt-4'>

                  <a
                    href={result.src}
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition'
                  >
                    View
                  </a>

                  <button
                    onClick={() =>
                      dispatch(removeFromCollection(result.id))
                    }
                    className='flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    )
  }

  return (

    <>

      <Navbar />

      <div className='min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6'>

        {/* EMPTY STATE */}

        {items.length === 0 ? (

          <div className='flex items-center justify-center h-[70vh]'>

            <div className='bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg'>

              <div className='text-6xl mb-5'>
                📂
              </div>

              <h2 className='text-3xl font-bold text-gray-800 mb-3'>
                Your Collection is Empty
              </h2>

              <p className='text-gray-500 mb-6'>
                Save photos, videos, and gifs to see them here.
              </p>

              <Link
                to='/'
                className='bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition'
              >
                Explore Media
              </Link>

            </div>

          </div>

        ) : (

          <div className='max-w-7xl mx-auto'>

            {/* HEADER */}

            <div className='text-center mb-14'>

              <h1 className='text-5xl font-bold text-gray-800 mb-3'>
                My Collection
              </h1>

              <p className='text-gray-500 text-lg'>
                Total Saved Items: {items.length}
              </p>

            </div>

            {/* SECTIONS */}

            {renderSection(
              '📸 Photos',
              images,
              'text-blue-600'
            )}

            {renderSection(
              '🎥 Videos',
              videos,
              'text-red-600'
            )}

            {renderSection(
              '✨ GIFs',
              gifs,
              'text-green-600'
            )}

          </div>

        )}

      </div>

      <Footer />

    </>
  )
}

export default Collections