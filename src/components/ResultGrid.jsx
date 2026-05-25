import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  setLoading,
  setError,
  setSearchQueryResults
} from '../Redux/Features/searchslice'

import {
  fetchPhotos,
  fetchVideos,
  fetchGifs
} from '../Api/MediaApi'

import {
  addToCollection
} from '../Redux/Features/collectionslice'

const ResultGrid = () => {

  const dispatch = useDispatch()

  const {
    query,
    activeTab,
    results,
    loading,
    error
  } = useSelector((state) => state.search)

  useEffect(() => {

    let ignore = false

    const getdata = async () => {

      dispatch(setLoading(true))

      try {

        let response
        let data = []

        // PHOTOS
        if (activeTab === 'Photos') {

          response = await fetchPhotos(query)

          data = response.map((item) => ({
            id: item.id,
            type: item.asset_type,
            src: item.urls.full,
            title: item.alt_description || 'Untitled',
            thumbnail: item.urls.small
          }))

        }

        // VIDEOS
        else if (activeTab === 'Videos') {

          response = await fetchVideos(query)

          data = response.map((item) => ({
            id: item.id,
            type: 'video',
            src: item.url,
            title: item.user?.name || 'Unknown',
            thumbnail: item.image
          }))

        }

        // GIFS
        else if (activeTab === 'Gifs') {

          response = await fetchGifs(query)

          data = response.map((item) => ({
            id: item.id,
            type: 'gif',
            src: item.url,
            title: item.title || 'Unknown',
            thumbnail: item.images.fixed_height.url
          }))

        }

        if (!ignore) {
          dispatch(setSearchQueryResults(data))
        }

      } catch (err) {

        if (!ignore) {
          dispatch(
            setError(
              'Failed to fetch results. Please try again.'
            )
          )
        }

      }

    }

    const timer = setTimeout(() => {
      getdata()
    }, 300)

    return () => {
      ignore = true
      clearTimeout(timer)
    }

  }, [activeTab, query, dispatch])

  return (

    <div className="min-h-96 mt-4">

      {/* LOADING */}

      {loading && (

        <div className="flex flex-col items-center justify-center h-64 gap-4">

          <div className="w-10 h-10 border-4 border-white/10 border-t-purple-500 rounded-full animate-spin" />

          <p className="text-slate-500 text-sm">
            Fetching results...
          </p>

        </div>

      )}

      {/* ERROR */}

      {error && (

        <div className="flex items-center justify-center h-64">

          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-4 rounded-xl text-sm">

            {error}

          </div>

        </div>

      )}

      {/* EMPTY */}

      {!loading && !error && results.length === 0 && (

        <div className="flex flex-col items-center justify-center h-60 gap-3">

          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">

            <svg
              className="w-7 h-7 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />

            </svg>

          </div>

          <h2 className="text-xl font-medium text-slate-500">
            No results found
          </h2>

          <p className="text-sm text-slate-600">
            Try a different search term or category
          </p>

        </div>

      )}

      {/* RESULTS */}

      {!loading && !error && results.length > 0 && (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {results.map((result) => (

            <div
              key={result.id}
              className="group relative rounded-2xl overflow-hidden bg-[#161b22] border border-white/5 hover:border-white/20 transition-all duration-300"
            >

              {/* IMAGE */}

              <div className="overflow-hidden w-full h-52">

                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

              </div>

              {/* TYPE */}

              <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full capitalize font-medium border border-white/10">

                {result.type}

              </span>

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">

                <h3 className="text-white text-sm font-semibold truncate mb-3">

                  {result.title}

                </h3>

                <div className="flex gap-2">

                  <a
                    href={result.src}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center text-sm py-2 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition"
                  >
                    View
                  </a>

                  <button
                    onClick={() =>
                      dispatch(addToCollection(result))
                    }
                    className="flex-1 text-sm py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg font-semibold transition border border-purple-500/50"
                  >
                    Save
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}

export default ResultGrid