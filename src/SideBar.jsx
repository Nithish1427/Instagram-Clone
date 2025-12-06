import React from "react";

function SideBar() {
  return (
    <div className="m-3">
      <div className="d-flex flex-column gap-3 position-fixed">
        <img
          className="logo-text my-3"
          src="/src/assets/Instagram-Text-Logo.png"
          alt="insta_txt"
        />
        <div><i className="bi bi-house-door-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-send"></i>Messages</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div><i className="bi bi-plus-lg"></i>Create</div>
        <div><i className="bi bi-person-circle"></i>Profile</div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-4">
        <div><i className="bi bi-list"></i>More</div>
        <div><i className="bi bi-boxes"></i>Also from Meta</div>
      </div>
    </div>
  );
}

export default SideBar;
