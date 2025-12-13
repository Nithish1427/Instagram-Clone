/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewStory() {
  const { id } = useParams();

  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => {setStory(data); console.log(data); })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center">
          <img className="vh-100" src={story.image} alt="story" />
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default ViewStory;
