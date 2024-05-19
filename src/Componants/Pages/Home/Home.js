import React from "react";
import "./home.scss";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div class="content">
        <div>
          <div class="context">
            <h3>Hi There !</h3>
            <h1>I'M Aryan Dantani</h1>
            <p>
              My experience in using JavaScript to design, develop, and manage
              complex components of software, coupled with my ability to learn
              and adapt to new technologies quickly, has enabled me to deliver
              robust solutions that have driven company growth and customer
              satisfaction.
            </p>
            <Footer/>
          </div>
          <div class="badge">
            <span class="text">Hallo!</span>
          </div>
        </div>

        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
