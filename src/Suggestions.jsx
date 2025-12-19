/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

function Suggestions() {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/following")
      .then((data) => {
        setFollowing(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Follow functionality to be implemented
  const handleFollow = async (id, username, profile_pic) => {
    try {
      axios
        .post("http://localhost:3000/following", {
          id: id,
          username: username,
          profile_pic: profile_pic,
        })
        .then(console.log("Followed Successfully"))
        .then(alert(`You started following ${username}`))
        .catch((error) => console.log(error));
      // Refresh following list after following
      axios
        .get("http://localhost:3000/following")
        .then((data) => {
          setFollowing(data.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="profSwitch_Suggestion d-flex justify-content-center">
      <div className="profile_switch w-75 m-4">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle mt-1"
              src={profile.profile_pic}
              alt="profile_pic"
            />
            <div className="m-2">
              <h5>{profile.handle}</h5>
              <h5 className="text-secondary">{profile.username}</h5>
            </div>
            <small className="text-primary mt-3 ms-auto">Switch</small>
          </div>
        ) : (
          <p>Loading....</p>
        )}

        <div className="d-flex mt-4">
          <p className="sugg_for_you text-secondary">Suggested for you</p>
          <b className="ms-auto">
            <small>See All</small>
          </b>
        </div>

        {suggestions.length > 0 ? (
          <div className="suggestions">
            {suggestions.map((suggestion) => (
              <div className="mb-2" key={suggestion.id}>
                <div className="d-flex mb-0">
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profile_pic}
                    alt="profile_pic"
                  />
                  <div className="sugg_text-mt mx-2">
                    <h5>{suggestion.username}</h5>
                    <h5 className="sugg_context text-secondary">
                      {suggestion.context}
                    </h5>
                  </div>
                  <small
                    className="text-primary sugg_text-mt mt-3 ms-auto"
                    onClick={() =>
                      handleFollow(
                        suggestion.id,
                        suggestion.username,
                        suggestion.profile_pic
                      )
                    }
                  >
                    Follow
                  </small>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
