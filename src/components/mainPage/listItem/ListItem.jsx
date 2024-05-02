import React from "react";
import "./ListItem.scss";
import SvgItem from "../svgItem/SvgItem";

const ListItem = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="container">
          <SvgItem weather={"sunny"}/>
        </div>
        <div className="card-header">
          <span>
            Россия,
            <br />
            Тюмень
          </span>
          <span>13 Марта</span>
        </div>

        <div className="temp">23°</div>
      </div>
    </div>
  );
};

export default ListItem;
