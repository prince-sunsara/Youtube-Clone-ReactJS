import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ContenxtApi } from './context/contextApi'

import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VedioDetails from './components/VedioDetails'

// import LeftNav from './components/LeftNav'
// import LeftNavMenuItem from './components/LeftNavMenuItem'
// import SearchResultVedioCard from './components/SearchResultVedioCard'
// import SuggestionVedioCard from './components/SuggestionVedioCard'
// import VedioCard from './components/VedioCard'

function App() {
  return (
    <ContenxtApi>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route exact path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route exact path='/vedio/:id' element={<VedioDetails />} />
          </Routes>
        </div>
      </Router>
    </ContenxtApi>
    
  )
}

export default App