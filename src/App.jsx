import React from 'react'
import SideBar from './SideBar'
import Feeds from './Feeds'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className='d-flex vh-100' >
      <div className='w-20'><SideBar/></div>
      <div className='w-50'><Feeds /></div>
      <div className='w-30'><Suggestions /></div>
    </div>
  )
}

export default App

// type 'rfce' --> press 'enter key' --for component skeleton 

// bootstrap default width classes - w-25, w-50, w-75, w-100