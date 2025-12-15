import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
  
  let tot = 0;

  const navigate = useNavigate();

  const [Stories, setStories] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:3000/story')
    .then((data) => data.json())
    .then((data) => setStories(data))
    .catch((error) => console.log(error))
  }, []);

  return (
    <div className='stories d-flex px-5'>
      <div className='d-none'>
        {tot = Stories.length}
      </div>
      {Stories.length > 0 ? (Stories.map((story) => (
        <div className='story mx-2' key={story.id} onClick={() => {navigate(`/story/${story.id}/${tot}`)}}>
          <div className='gradient-border'>
            <div className='white-border'>
              <img className='story-dp rounded-circle' src={story.user.profile_pic} alt="profile_pic" />
            </div>
          </div>
          <p className='story-uname text-truncate mx-2' style={{width:"50px"}}>{story.user.username}</p>
        </div>
      ))) : (<p>Loading</p>)}
    </div>
  )
}

export default Stories