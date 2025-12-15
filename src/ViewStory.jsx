import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function ViewStory() {
  const { id, tot } = useParams();

  const [story, setStory] = useState(null);

  // const navigate = useNavigate();

  // if(id>tot || id<tot){
  //   navigate('/');
  // }

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setStory(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="bg-dark">
      {story ? (
        <div className="d-flex justify-content-center align-items-center">
          {id > 1 && (
            <Link to={`http://localhost:5173/story/${Number(id) - 1}/${tot}`}>
              <i
                className="bi bi-caret-left-fill px-1 fs-4"
                style={{ color: "white" }}
              ></i>
            </Link>
          )}
          <img className="vh-100" src={story.user.image} alt="story" />
          {id < tot && (
            <Link to={`http://localhost:5173/story/${Number(id) + 1}/${tot}`}>
              <i
                className="bi bi-caret-right-fill px-3 fs-4"
                style={{ color: "white" }}
              ></i>
            </Link>
          )}
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default ViewStory;
