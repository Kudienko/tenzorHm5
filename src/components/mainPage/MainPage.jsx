import React from "react";
import "./MainPage.scss";
import SearchItem from "./searchItem/SearchItem";
import videoBg from '../../assets/rain.mp4'


function MainPage() {
  return (
    <div className="wrapper">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <header className="header"><SearchItem /></header>
        <div className="main_wrapper">
          <div className="next_days_wrapper"></div>
          <main className="current_day_wrapper"></main>
        </div>
        <footer className="footer">FOOTER</footer>
      </div>
    </div>
  );
}

export default MainPage;
