import React from "react";
import ProCom from "./ProCom";
// import Imgone from "./pic/pcone.png";
// import Imgtwo from "../../../public/pic/pctwo.png";
// import Imgthree from "../../../public/pic/pcthree.png";
import "./projectd.css";

const Projectd = () => {
  return (
    <>
      <div className="col-md-10 mx-auto py-4">
        <h2 className="pt-5">OUR PROJECTS</h2>
        <p>and counting more ......</p>
        {/* <div className="marquee">
            <ul className="marquee-content">
              <li>
                <i className="fab fa-github"></i>
              </li>
              <li>
                <i className="fab fa-codepen"></i>
              </li>
              <li>
                <i className="fab fa-free-code-camp"></i>
              </li>
              <li>
                <i className="fab fa-dev"></i>
              </li>
              <li>
                <i className="fab fa-react"></i>
              </li>
              <li>
                <i className="fab fa-vuejs"></i>
              </li>
              <li>
                <i className="fab fa-angular"></i>
              </li>
              <li>
                <i className="fab fa-node"></i>
              </li>
              <li>
                <i className="fab fa-wordpress"></i>
              </li>
              <li>
                <i className="fab fa-aws"></i>
              </li>
              <li>
                <i className="fab fa-docker"></i>
              </li>
              <li>
                <i className="fab fa-android"></i>
              </li>
            </ul>
          </div> */}
        <div className="row py-4 text-white">
          <ProCom proname={"Website Development"} iamge={"./pic/pcone.png"} />
          <ProCom proname={"Mobile Development"} iamge={"./pic/pctwo.png"} />
          <ProCom proname={"IOS/Android Development"} iamge={"./pic/pcthree.png"} />
        </div>
      </div>
    </>
  );
};

export default Projectd;
