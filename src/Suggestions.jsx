import React, { useEffect, useState } from "react";

function Suggestions() {
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
    <div className="d-flex justify-content-center">
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
            <small className="text-primary my-2 ms-auto">Switch</small>
          </div>
        ) : (
          <p>Loading....</p>
        )}

        <div className="d-flex mt-4">
          <p className="text-secondary">Suggested for you</p>
          <b className="ms-auto"><small>See All</small></b>
        </div>

        {suggestions.length > 0 ? (
          <div className="suggestions">
            {suggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className="d-flex">
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profile_pic}
                    alt="profile_pic"
                  />
                  <div className="m-2">
                    <h5>{suggestion.username}</h5>
                    <h5 className="sugg_context text-secondary">{suggestion.context}</h5>
                  </div>
                  <small className="text-primary my-2 ms-auto">Follow</small>
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
