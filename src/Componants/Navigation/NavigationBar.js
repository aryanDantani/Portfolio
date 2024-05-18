import React, { useEffect, useRef, useState } from "react";
import "./navigations.scss";
const NavigationBar = () => {
  const ref = useRef(null);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setInterval(
      () => setNumbers((current) => [...current, Math.random()]),
      1500
    );
  }, []);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div class="main-app">
      <div class="sidebar">
        <nav class="main-nav">
          <ul class="main-menu">
            <li
              class="menu-item"
            >
              <a href="/home" class="menu-a">
                <div class="menu-txt-hld">
                  <i class="fas fa-igloo menu-icon"></i>
                  <span class="menu-txt">Home</span>
                </div>
              </a>
            </li>
            <li
              class="menu-item"
              
            >
              <a class="menu-a" onClick={() => handleClick()}>
                <div class="menu-txt-hld">
                  <i class="fas fa-bell menu-icon"></i>
                  <span class="menu-txt">About Us</span>
                </div>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-a">
                <div class="menu-txt-hld">
                  <i class="fas fa-envelope menu-icon"></i>
                  <span class="menu-txt">Messages</span>
                </div>
              </a>
            </li>
            <li
              class="menu-item"
            >
              <a href="/profile" class="menu-a">
                <div class="menu-txt-hld">
                  <i class="fas fa-user-circle menu-icon"></i>
                  <span class="menu-txt">My profile</span>
                </div>
              </a>
            </li>

            <div class="sol-media">
              <li class="menu-item">
                <a href="https://github.com/" class="menu-a">
                  <div class="menu-txt-hld">
                    <i class="fa-brands fa-github"></i>
                    <span class="menu-txt">Git</span>
                  </div>
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="https://www.linkedin.com/?trk=content-hub-home-page_nav-header-logo"
                  class="menu-a"
                >
                  <div class="menu-txt-hld">
                    <i class="fa-brands fa-linkedin"></i>
                    <span class="menu-txt">Linkdin</span>
                  </div>
                </a>
              </li>
              <li class="menu-item">
                <a href="https://www.instagram.com/" class="menu-a">
                  <div class="menu-txt-hld">
                    <i class="fa-brands fa-instagram"></i>
                    <span class="menu-txt">Instagram</span>
                  </div>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
