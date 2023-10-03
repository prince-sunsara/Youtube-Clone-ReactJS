import React from 'react'
import { ContenxtApi } from './context/contextApi'

function App() {
  return (
    <ContenxtApi>
      <div className="text-3xl">This is my youtube clone</div>
    </ContenxtApi>
    
  )
}

export default App