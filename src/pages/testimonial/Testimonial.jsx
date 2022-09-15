import React from "react";
import "./testimonial.css";
// import Tst from "./Tst.jsx";

const Testimonial = () => {
  return (
    <>
      <div className="col-md-10 mx-auto py-4">
        <div>
          <h2 className="pt-5 pb-3">WHAT CLIENTS SAY</h2>
        </div>
        <div className="container">
          <div className="carousel slide democ" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption">
                  <p>
                    If Shai Reznik's TDD videos don't convince you to add
                    automated testing your code, I don't know what will.This was
                    the very best explanation of frameworks for brginners that
                    I've ever seen.
                  </p>
                  <img src="https://i.imgur.com/lE89Aey.jpg" alt="" />
                  <div id="image-caption">Nick Doe</div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    If Shai Reznik's TDD videos don't convince you to add
                    automated testing your code, I don't know what will.This was
                    the very best explanation of frameworks for brginners that
                    I've ever seen.
                  </p>
                  <img
                    src="https://i.imgur.com/QptVdsp.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div id="image-caption">Cromption Greves</div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    If Shai Reznik's TDD videos don't convince you to add
                    automated testing your code, I don't know what will.This was
                    the very best explanation of frameworks for brginners that
                    I've ever seen.
                  </p>
                  <img
                    src="https://i.imgur.com/jQWThIn.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div id="image-caption">Harry Mon</div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <i className="fas fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        {/* <Tst /> */}
      </div>
    </>
  );
};

export default Testimonial;
