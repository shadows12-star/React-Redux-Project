import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import {Routes, Route} from 'react-router-dom'
import Collections from './components/Collections'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />

   
      <div className='min-h-screen w-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-400'>
        
      <Routes>
        <Route path='/' element={
          <>
          <Navbar />
            <SearchBar />
            <Tabs />
            <ResultGrid />
           <Footer />
          </>
        } />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collections' element={<Collections />} />
      </Routes>
    

      </div>
    </Provider>
  )
}

export default App