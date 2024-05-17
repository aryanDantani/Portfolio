import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div>
      <nav id="nav-bar">
        <input id="nav-toggle" type="checkbox" />
        <div id="nav-header">
          <a id="nav-title" href="https://codepen.io" target="_blank">
            C#<i class="fab fa-codepen"></i>DEPEN
          </a>
          <label for="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <div class="nav-button">
            <i class="fas fa-palette"></i>
            <span>Your Work</span>
          </div>
          <div class="nav-button">
            <i class="fas fa-images"></i>
            <span>Assets</span>
          </div>
          <div class="nav-button">
            <i class="fas fa-thumbtack"></i>
            <span>Pinned Items</span>
          </div>
          <hr />
          <div class="nav-button">
            <i class="fas fa-heart"></i>
            <span>Following</span>
          </div>
          <div class="nav-button">
            <i class="fas fa-chart-line"></i>
            <span>Trending</span>
          </div>
          <div class="nav-button">
            <i class="fas fa-fire"></i>
            <span>Challenges</span>
          </div>
          <div class="nav-button">
            <i class="fas fa-magic"></i>
            <span>Spark</span>
          </div>
          <hr />
          <div class="nav-button">
            <i class="fas fa-gem"></i>
            <span>Codepen Pro</span>
          </div>
          <div id="nav-content-highlight"></div>
        </div>
        <input id="nav-footer-toggle" type="checkbox" />
        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-avatar">
              <img
                src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
                alt="Avatar"
              />
            </div>
            <div id="nav-footer-titlebox">
              <a
                id="nav-footer-title"
                href="https://codepen.io/uahnbu/pens/public"
                target="_blank"
              >
                uahnbu
              </a>
              <span id="nav-footer-subtitle">Admin</span>
            </div>
            <label for="nav-footer-toggle">
              <i class="fas fa-caret-up"></i>
            </label>
          </div>
          <div id="nav-footer-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
