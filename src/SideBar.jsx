import React from "react";

function SideBar() {
  return (
    <div className="m-3">
      <div className="d-flex flex-column gap-3">
        <img
          className="logo-text my-3"
          src="/src/assets/Instagram-Text-Logo.png"
          alt="insta_txt"
        />
        <div><i class="bi bi-house-door-fill"></i>Home</div>
        <div><i class="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass"></i>Explore</div>
        <div><i class="bi bi-play-btn"></i>Reels</div>
        <div><i class="bi bi-send"></i>Messages</div>
        <div><i class="bi bi-heart"></i>Notifications</div>
        <div><i class="bi bi-plus-lg"></i>Create</div>
        <div><i class="bi bi-person-circle"></i>Profile</div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-4">
        <div><i class="bi bi-list"></i>More</div>
        <div><i class="bi bi-boxes"></i>Also from Meta</div>
      </div>
    </div>
  );
}

export default SideBar;
