import React from "react";
import { useLocation } from "react-router-dom";
import "./navigations.scss";

const NavigationsSec = () => {
  const location = useLocation();

  return (
    <nav class="navbar">

      <ul class="navbar__menu">

        <li
          class={
            location.pathname.includes("/home")
              ? "navbar__select"
              : "navbar__item"
          }
        >

          <a href="/home" class="navbar__link">
            <i class="fa-solid fa-house" />
            <span>Home</span>
          </a>

        </li>

        <li
          class={
            location.pathname.includes("/message")
              ? "navbar__select"
              : "navbar__item"
          }
        >

          <a href="/message" class="navbar__link">
            <i class="fa-solid fa-message" />
            <span>Messages</span>
          </a>

        </li>

        <li
          class={
            location.pathname.includes("/customers")
              ? "navbar__select"
              : "navbar__item"
          }
        >

          <a href="/customer" class="navbar__link">
            <i class="fa-solid fa-people-group" />
            <span>Customers</span>
          </a>

        </li>

        <li
          class={
            location.pathname.includes("/project")
              ? "navbar__select"
              : "navbar__item"
          }
        >

          <a href="/project" class="navbar__link">
            <i class="fa-solid fa-passport" />
            <span>Projects</span>
          </a>

        </li>

        <li class="navbar__item">
          <a href="#" class="navbar__link">
            <i class="fa-solid fa-wrench" />
            <span>Resources</span>
          </a>
        </li>

        <li class="navbar__item">
          <a href="#" class="navbar__link">
            <i class="fa-solid fa-handshake-angle" />
            <span>Help</span>
          </a>
        </li>

        <li
          class={
            location.pathname.includes("/settings")
              ? "navbar__select"
              : "navbar__item"
          }
        >
          <a href="/settings" class="navbar__link">
            <i class="fa-solid fa-gears" />
            <span>Settings</span>
          </a>
        </li>

      </ul>

      <div class="pr-section">

        <ul class="navbar__menu">

          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i class="fa-brands fa-github" />
              <span>Github</span>
            </a>
          </li>

          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i class="fa-brands fa-linkedin" />
              <span>Linkdin</span>
            </a>
          </li>

          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i class="fa-brands fa-instagram" />
              <span>Instagram</span>
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default NavigationsSec;
