import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
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
  }, []);

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
    axios
      .put("http://localhost:3000/profile", profile)
      .then(console.log("Profile Updated"))
      .catch((error) => console.log(error));
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
          </div>
          <label htmlFor="handle" className="text-secondary mx-2">User ID</label>
          <input
            type="text"
            value={profile.handle}
            name="handle"
            className="form-control my-2"
            onChange={onChangeHandle}
          />
          <label htmlFor="username" className="text-secondary mx-2">Name</label>
          <input
            type="text"
            value={profile.username}
            name="username"
            className="form-control my-2"
            onChange={onChangeHandle}
          />
          <label htmlFor="profile_pic" className="text-secondary mx-2">Profile Picture</label>
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
          <div>
            <h5>Following</h5>
            {following.map((follow) => (
              <div key={follow.id}>
                <img
                  className="dp rounded-circle my-1 me-2"
                  src={follow.profile_pic}
                  alt="profile_pic"
                />
                <span>{follow.username}</span>
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
