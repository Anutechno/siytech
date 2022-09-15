import React from "react";
import Infoimg from "./Infoimg";
import "./main.css";
import SlideOne from "./SlideOne";

const MainSec = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row main-sec">
          <div id="slider_1">
            <div><SlideOne/></div>
            <div className="banner-shape"><Infoimg/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSec;
