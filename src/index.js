import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Componants/Pages/Home/Home';
import ContactUs from "./Componants/ContactUs/ContactUs";
import AboutUs from './Componants/Pages/AboutUs/AboutUs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import gsapLoader from './gsapLoader';

const router = createBrowserRouter([

  {

      path: "/",

      element: <App />,

      children: [

          {
              element: <Home />,
              path: "/",
              loader: gsapLoader
          },

          {
              element: <AboutUs />,
              path: "/aboutus",
              loader: gsapLoader
          },

          {
            element: <ContactUs />,
            path: "/contactus",
            loader: gsapLoader
        }

      ]

  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

reportWebVitals();
