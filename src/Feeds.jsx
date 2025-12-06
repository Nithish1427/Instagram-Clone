import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feeds() {
  return (
    <div>
        <div><Stories /></div>
        <div><Posts /></div>
    </div>
  )
}

export default Feeds

// npx json-server --watch db.json --port 3000