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
          <div className="next_days_wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime sit saepe, quo reprehenderit dolorem pariatur accusantium facere culpa architecto, reiciendis voluptatum doloribus voluptatem iure laboriosam in officiis animi amet.</div>
          <main className="current_day_wrapper">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorem modi delectus dolore non praesentium veniam aperiam explicabo nihil velit! Quo asperiores voluptatum tempore fugiat est blanditiis, voluptates eveniet et!</main>
        </div>
        <footer className="footer">FOOTER</footer>
      </div>
    </div>
  );
}

export default MainPage;
