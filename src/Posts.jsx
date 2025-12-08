import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="post my-3" key={post.id}>
              <div className="d-flex">
                <img
                  className="dp rounded-circle my-1"
                  src={post.user.profile_pic}
                  alt="profile_pic"
                />
                <h5 className="post-uname mx-1">{post.user.username}</h5>
              </div>
              <img className="image" src={post.image} alt="post" />
              <div className="d-flex mt-2">
                <i className="lcs bi bi-heart"></i>
                <i className="lcs bi bi-chat"></i>
                <i className="lcs bi bi-send"></i>
                <i className="bi bi-bookmark ms-auto"></i>
              </div>
              <b className="likes_count">{post.likes} Likes</b>
              <p className="caption">{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Posts;
