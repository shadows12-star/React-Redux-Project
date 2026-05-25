import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../Redux/Features/searchslice'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearchQuery(searchTerm))
    setSearchTerm('')
  }

  return (
    <div className='w-full flex justify-center  px-4'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-2xl flex items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mt-10'
      >
        <span className='pl-4 text-purple-400'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </span>

        <input
          type='text'
          required
          placeholder='Search photos, videos, gifs...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex-1 px-4 py-4 text-base outline-none bg-transparent text-gray-700 placeholder:text-gray-400'
        />

        <button
          type='submit'
          className='px-7 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar