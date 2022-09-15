import React from "react";
import Nav from "react-bootstrap/Nav";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import "./footer.css";

const Secfooter = () => {
  return (
    <>
      <div className="d-flex pt-3">
        <div className="col-md-3 text-center fnt">
          <p>©2022 Siyatech Software Solutions.</p>
        </div>
        <div className="col-md-3 text-center fnt">
          <p>Terms & Privacy</p>
        </div>
        <div className="col-md-3">
          <ul className="social-ic d-flex">
            <li>
              <Nav.Link>
                <FaLinkedin />
              </Nav.Link>
            </li>
            <li>
              <Nav.Link>
                <FaTwitter />
              </Nav.Link>
            </li>
            <li>
              <Nav.Link>
                <FaFacebook />
              </Nav.Link>
            </li>
            <li>
              <Nav.Link>
                <FaYoutube />
              </Nav.Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <Nav.Link>
            <img src="./pic/ag.png" className="appl" alt="apple" />
          </Nav.Link>
        </div>
      </div>
    </>
  );
};

export default Secfooter;
