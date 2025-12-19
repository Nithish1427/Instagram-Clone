import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {

  const [unfollowed, setUnfollowed] = useState(0);

  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((data) => {
        setProfile(data.data);
        console.log(data);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:3000/following")
      .then((data) => {
        setFollowing(data.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:3000/followers")
      .then((data) => {
        setFollowers(data.data);
      })
      .catch((error) => console.log(error));
  }, [unfollowed]);

  function onChangeHandle(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // prev - takes previous value of profile
    // ... - spreading operator used to spread previous profile value
    // change in value(value) mapped to changed value(key)
    // other than the target (changed) value, values taken from the previous profile value
  }

  // Update profile function
  const handleUpdate = async () => {
    await axios
      .put("http://localhost:3000/profile", profile)
      .then(console.log("Profile Updated"))
      .catch((error) => console.log(error));
  };

  // Unfollow functionality
  const handleUnfollow = async (id, username) => {
    try {
      await axios.delete(`http://localhost:3000/following/${id}`, id, username)
      .then(console.log("Unfollowed Successfully"))
      .then(alert(`You unfollowed ${username}`))
      .catch((error) => console.log(error));
      // setFollowing((prev) => prev.filter((follow) => follow.id !== id));
      setUnfollowed(!unfollowed);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "100px" }}>
      {profile ? (
        <div>
          <div className="d-flex row justify-content-center">
            <img
              className="rounded-circle my-1"
              style={{ height: "120px", width: "140px" }}
              src={profile.profile_pic}
              alt="profile_pic"
            />
            <h5 className="profile-handle">{profile.handle}</h5>
          </div>
          <label htmlFor="handle" className="text-secondary mx-2">
            User ID
          </label>
          <input
            type="text"
            value={profile.handle}
            name="handle"
            className="form-control my-2"
            onChange={onChangeHandle}
          />
          <label htmlFor="username" className="text-secondary mx-2">
            Name
          </label>
          <input
            type="text"
            value={profile.username}
            name="username"
            className="form-control my-2"
            onChange={onChangeHandle}
          />
          <label htmlFor="profile_pic" className="text-secondary mx-2">
            Profile Picture
          </label>
          <input
            type="text"
            value={profile.profile_pic}
            name="profile_pic"
            className="form-control my-2"
            onChange={onChangeHandle}
          />
          <button className="btn btn-primary my-2" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <div>Loading....</div>
      )}

      <div className="d-flex justify-content-between mt-5">
        {followers.length > 0 ? (
          <div>
            <h5>Followers</h5>
            {followers.map((follower) => (
              <div key={follower.id}>
                <img
                  className="dp rounded-circle my-1 me-2"
                  src={follower.profile_pic}
                  alt="profile_pic"
                />
                <span>{follower.username}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading followers....</div>
        )}

        {following.length > 0 ? (
          <div style={{ maxWidth : "350px", marginLeft: "50px" }}>
            <h5>Following</h5>
            {following.map((follow) => (
              <div key={follow.id} className="d-flex justify-content-between">
                <div>
                  <img
                    className="dp rounded-circle my-1 me-2"
                    src={follow.profile_pic}
                    alt="profile_pic"
                  />
                  <span>{follow.username}</span>
                </div>
                <small
                  className="text-primary unfollow-text ms-5"
                  onClick={() =>
                    handleUnfollow(
                      follow.id,
                      follow.username,
                      follow.profile_pic
                    )
                  }
                >
                  Unfollow
                </small>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading following....</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
