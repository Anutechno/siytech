import React from "react";
import Secfooter from "./Secfooter";
import Nav from "react-bootstrap/Nav";

const Sfooter = () => {
  return (
    <>
      <section>
        <div className="container footer-back">
          <div className="row py-4">
            <div className="col-md-3 lnk">
              <h3>SiyaTech</h3>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Services</Nav.Link>
              <Nav.Link>Portfolio</Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
            </div>
            <div className="col-md-3 lnk">
              <h3>Our Services</h3>
              <Nav.Link>Web Services</Nav.Link>
              <Nav.Link>Mobility Solution</Nav.Link>
              <Nav.Link>Business Analysis</Nav.Link>
              <Nav.Link>Responsive Solution</Nav.Link>
              <Nav.Link>Software Development</Nav.Link>
            </div>
            <div className="col-md-3 lnk">
              <h3>Quick Links</h3>
              <Nav.Link>Web Services</Nav.Link>
              <Nav.Link>Web Services</Nav.Link>
              <Nav.Link>Web Services</Nav.Link>
              <Nav.Link>Web Services</Nav.Link>
              <Nav.Link>Web Services</Nav.Link>
            </div>
            <div className="col-md-3 lnk">
              <h3>About Us</h3>
              <Nav.Link>Company</Nav.Link>
              <Nav.Link>Customers</Nav.Link>
              <Nav.Link>Careers</Nav.Link>
              <Nav.Link>Team</Nav.Link>
            </div>
          </div>
        </div>
        <div className="secfoot">
          <Secfooter />
        </div>
      </section>
    </>
  );
};

export default Sfooter;
