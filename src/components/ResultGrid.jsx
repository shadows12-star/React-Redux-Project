import React from 'react'
import { useSelector } from 'react-redux'
import { clearResults } from '../Redux/Features/searchslice'
import {fetchPhotos, fetchVideos, fetchGifs} from '../Api/MediaApi'
import {setLoading, setError,setSearchQueryResults} from '../Redux/Features/searchslice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {addToCollection, clearCollection,   removeFromCollection} from '../Redux/Features/collectionslice'
const ResultGrid = () => {

  const dispatch = useDispatch()




const {query, activeTab, results, loading, error} = useSelector((state) => state.search)

 
const getdata = async () => {
   let data=[]
  dispatch(setLoading(true))
  try {

  let response
  if(activeTab === 'Photos'){
    response = await fetchPhotos(query)

    data= response.map((item) => ({
      id: item.id,
      type: item.asset_type,
      src: item.urls.full,
      title: item.alt_description,
      thumbnail: item.urls.small
    }))
  }
  if(activeTab === 'Videos'){
    response = await fetchVideos(query)

    data= response.map((item) => ({
      id: item.id,
      type:'video',
      src: item.url,
      title: item.user.name||'Unknown',
      thumbnail: item.image
      
      
    }))
  }
  if(activeTab === 'Gifs'){
    response = await fetchGifs(query)

    data= response.map((item) => ({
      id: item.id,
      type:'gif',
      src: item.url,
      title: item.title||'Unknown',
      thumbnail: item.images.fixed_height.url
     
      
      
    }))
  }
  dispatch(setSearchQueryResults(data))
  } catch (err) {
    dispatch(setError('Failed to fetch results. Please try again.'))
  }

  console.log(data)
  


}
useEffect(() => {
  getdata()
}, [activeTab, query])
if(loading){
  return <div>Loading...</div>
}
if(error){
  return <div>Error: {error}</div>
}

  return (
  <div className='min-h-screen bg-gray-100 p-6 mt-8 rounded-lg'>

    {results.length === 0 ? (

      <div className='flex items-center justify-center h-[60vh]'>
        <h2 className='text-2xl font-semibold text-gray-500'>
          No results found
        </h2>
      </div>

    ) : (

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {results.map((result) => (

          <div
            key={result.id}
            className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300'
          >

            <div className='overflow-hidden'>

              <img
                src={result.thumbnail}
                alt={result.title}
                className='w-full h-60 object-cover hover:scale-110 transition duration-300'
              />

            </div>

            <div className='p-4'>

              <h3 className='text-lg font-semibold text-gray-800 truncate'>
                {result.title}
              </h3>

              <p className='text-sm text-gray-500 capitalize mt-1'>
                {result.type}
              </p>

              <a
                href={result.src}
                target='_blank'
                rel='noreferrer'
                className='inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition'
              >
                View
              </a>
             <button 
             
             onClick={() => {
               dispatch(addToCollection(result))
             }}
             className='inline-block ml-5 mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
                Save
              </button>
            </div>

          </div>

        ))}

      </div>

    )}

  </div>
)
}

export default ResultGrid