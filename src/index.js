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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
