import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector, useDispatch } from 'react-redux'
import {
  clearCollection,
  removeFromCollection
} from '../Redux/Features/collectionslice'

const Collections = () => {

  const dispatch = useDispatch()

  const { items } = useSelector(
    (state) => state.collection
  )

  const images = items.filter(
    (item) => item.type === 'photo'
  )

  const videos = items.filter(
    (item) => item.type === 'video'
  )

  const gifs = items.filter(
    (item) => item.type === 'gif'
  )

  const renderSection = (
    title,
    data,
    color
  ) => {

    if (data.length === 0) return null

    return (

      <div className='mb-16'>

        {/* SECTION HEADER */}

        <div className='flex items-center justify-between mb-6'>

          <h2
            className={`text-2xl font-bold flex items-center gap-2 ${color}`}
          >
            {title}
          </h2>

          <span className='bg-gradient-to-r from-purple-800/60 to-pink-800/60 border border-purple-500/30 px-4 py-1.5 rounded-full text-slate-300 text-xs font-semibold tracking-widest uppercase'>
            • {data.length} Items
          </span>

        </div>

        {/* GRID */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

          {data.map((result) => (

            <div
              key={result.id}
              className='group bg-[#12172a] border border-purple-900/40 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition duration-300 shadow-lg shadow-black/30'
            >

              {/* IMAGE */}

              <div className='overflow-hidden h-48'>

                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
                />

              </div>

              {/* CONTENT */}

              <div className='p-4'>

                <h3 className='text-base font-semibold text-white truncate'>
                  {result.title}
                </h3>

                <p className='text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium'>
                  {result.type}
                </p>

                {/* BUTTONS */}

                <div className='flex gap-3 mt-4'>

                  <a
                    href={result.src}
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-semibold text-sm'
                  >
                    View
                  </a>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCollection(result.id)
                      )
                    }
                    className='flex-1 px-4 py-2 bg-red-700/80 hover:bg-red-700 text-white rounded-lg transition font-semibold text-sm'
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

      <div className='min-h-screen bg-[#0a0e1a] text-white px-6 py-10'>

        {/* EMPTY STATE */}

        {items.length === 0 ? (

          <div className='flex items-center justify-center h-[70vh]'>

            <div className='bg-[#12172a] border border-purple-900/40 p-10 rounded-3xl shadow-2xl text-center max-w-lg'>

              <div className='text-6xl mb-5'>
                📂
              </div>

              <h2 className='text-3xl font-bold text-white mb-3'>
                Your Collection is Empty
              </h2>

              <p className='text-slate-400 mb-6'>
                Save photos, videos, and gifs to see them here.
              </p>

              <Link
                to='/'
                className='inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition font-semibold'
              >
                Explore Media
              </Link>

            </div>

          </div>

        ) : (

          <div className='max-w-7xl mx-auto'>

            {/* HEADER */}

            <div className='text-center mb-14'>

              <h1 className='text-5xl font-extrabold tracking-widest uppercase text-white mb-3'>
                My Collection
              </h1>

              <p className='text-slate-400 text-base'>
                Total Saved Items: {items.length}
              </p>

              <button
                onClick={() =>
                  dispatch(clearCollection())
                }
                className='mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl transition font-semibold text-sm shadow-lg shadow-red-900/30'
              >
                Clear Collection
              </button>

            </div>

            {/* SECTIONS */}

            {renderSection(
              '🖼 Photos',
              images,
              'text-white'
            )}

            {renderSection(
              '🎥 Videos',
              videos,
              'text-white'
            )}

            {renderSection(
              '✨ GIFs',
              gifs,
              'text-white'
            )}

          </div>

        )}

      </div>

      <Footer />

    </>

  )

}

export default Collections