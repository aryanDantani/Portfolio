import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />

      <ul>
        <li>
          <a href="#">
            <i class="fab fa-edge"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-firefox"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-chrome"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-opera"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
