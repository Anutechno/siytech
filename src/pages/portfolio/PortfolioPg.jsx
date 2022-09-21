import React from "react";
import "./portfolio.css";
import Sfooter from "../../components/footer/Sfooter";
import Header from "../../components/header/Header";
// import Imp from "../../../public/pic/port.png"

const PortfolioPg = () => {
  const ab = [
    {
      id: 1,
      im: "pic/my.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 2,
      im: "pic/portfo.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 3,
      im: "pic/classmax.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 4,
      im: "pic/portfo.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 5,
      im: "pic/port.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 6,
      im: "pic/my.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 7,
      im: "pic/classmax.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 8,
      im: "pic/my.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 9,
      im: "pic/port.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 10,
      im: "pic/portfo.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 11,
      im: "pic/port.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    },
    {
      id: 12,
      im: "pic/my.png",
      name: "name",
      desc: "Every time you open a pull request, or push new changes to a branch, Netlify automatically builds a preview with a unique URL."
    }
  ];

  return (
    <>
      <Header />
      <div className="col-md-10 mx-auto pb-5">
        <div className="text-center py-5">
          <h2 className="por">Portfolio</h2>
        </div>
        <div className="row">
          <div className="d-flex justify-content-evenly pb-5 awm">
            <div className="all">
              <span>All</span>
            </div>
            <div className="web">
              <span>Web Application</span>
            </div>
            <div className="mob">
              <span>Mobile Application</span>
            </div>
          </div>
          {ab.map(({ id, im, name, desc }) => {
            return (
              <>
                <div className="col-md-4 text-center p-3" key={id.toString()}>
                  <div className="im">
                    <img src={im} alt="img" />
                  </div>
                  <div className="nm pt-4">
                    <h5 className="fw-bold">{name}</h5>
                  </div>
                  <div className="dec">
                    <p className="">{desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default PortfolioPg;
