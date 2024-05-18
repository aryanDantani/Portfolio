import React, { useEffect } from "react";
import "./sidebar.scss";
import { Link, useLocation, useNavigation } from "react-router-dom";
import  profile  from "../Images/Profile.jpeg"
import gsap from "gsap";

const Sidebar = () => {
  const navigate = useNavigation();
  let location = useLocation();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".content", { overflow: "hidden" })
      .fromTo(
        ".content",
        { opacity: 0, x: 300 },
        { opacity: 1, x: 0, duration: 1 }
      )
      .set(".content", { overflow: "visible" });
  }, [location]);
  return (
    <div>
      <nav id="nav-bar">
        <input id="nav-toggle" type="checkbox" />
        <div id="nav-header">
          <a id="nav-title" href="#" target="_blank">
            Aryan Dantani
          </a>
          <label for="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <div class="nav-button">
            <i class="fas fa-palette"></i>
            <span>
              <Link to="/" component="span">
                Your Work
              </Link>
            </span>
          </div>
          <div class="nav-button">
            <i class="fas fa-images"></i>
            {/* <span onClick={()=> navigate("/aboutus") }>Assets</span> */}
            <span>
              <Link to="/aboutus" component="span">
                Assets
              </Link>
            </span>
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
                src={profile}
                alt="Avatar"
              />
            </div>
            <div id="nav-footer-titlebox">
              <a
                id="nav-footer-title"
                href="https://codepen.io/uahnbu/pens/public"
                target="_blank"
              >
                Aryan
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
