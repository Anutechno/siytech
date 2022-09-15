import React from "react";
import "./serve.css";

const ServeSec = () => {
  return (
    <>
      <div className="py-5">
        <div className="serv-head">
          <span className="spl">
            <h3>PROJECT MANAGEMENT</h3>
            <p>
              Bring your team work together in one shared space. Choose the
              project view that suits your style, and collaborate no matter
              where you are.
            </p>
          </span>
        </div>
        <div className="col-md-10 mx-auto cnt">
          <div className="d-flex prmg">
            <div className="col-md-6">
              <div className="planing">
                <h4>Planning</h4>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="col-md-6 comser">
              <img src="./pic/plan.jpg" alt="" className="ps5" />{" "}
            </div>
          </div>
          <div className="d-flex prmg">
            <div className="col-md-6 comser">
              {" "}
              <img src="./pic/figma.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <div className="planing">
                <h4 className="ps5">Create Figma design</h4>
                <p className="ps5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex prmg">
            <div className="col-md-6">
              <div className="planing">
                <h4>Content Development</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="col-md-6 comser">
              {" "}
              <img src="./pic/content.jpg" alt="" className="ps5" />
            </div>
          </div>
          <div className="d-flex prmg">
            <div className="col-md-6 comser">
              {" "}
              <img src="./pic/test.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className="planing">
                <h4 className="ps5">Testing</h4>
                <p className="ps5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex prmg">
            <div className="col-md-6">
              <div className="planing">
                {" "}
                <h4>Deploy</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="col-md-6 comser">
              {" "}
              <img src="./pic/dploy.jpg" alt="" className="ps5" />
            </div>
          </div>
        </div>
        <span className="ver-lin"></span>
      </div>
    </>
  );
};

export default ServeSec;
