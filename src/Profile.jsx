import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/profile").then((data) => {
      setProfile(data.data);
      console.log(data);
    });
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
    <div className="m-5">
      {profile ? (
        <div>
          <img
            className="rounded-circle my-1"
            style={{ height: "100px", width: "100px" }}
            src={profile.profile_pic}
            alt="profile_pic"
          />
          <h5>{profile.username}</h5>
          <input
            type="text"
            value={profile.username}
            name="username"
            className="form-control my-2"
            onChange={onChangeHandle}
          />
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
    </div>
  );
}

export default Profile;
