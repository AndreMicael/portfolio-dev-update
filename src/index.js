import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import {register} from 'swiper/element/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import  'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// register();

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

if (GA_TRACKING_ID) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_TRACKING_ID);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
