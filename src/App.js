import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ContenxtApi } from './context/contextApi'

import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'


function App() {
  return (
    <ContenxtApi>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route exact path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route exact path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </ContenxtApi>
    
  )
}

export default App