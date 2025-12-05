// type 'rfce' --> press 'enter key' --for component skeleton 

import React from 'react'
import SideBar from './SideBar'

function App() {
  return (
    <div className='d-flex vh-100' >
      <div className='w-20'><SideBar/></div>
      <div className='w-50 bg-info'>Feed</div>
      <div className='w-30'>Suggestions</div>
    </div>
  )
}

export default App

// bootstrap default width classes - w-25, w-50, w-75, w-100