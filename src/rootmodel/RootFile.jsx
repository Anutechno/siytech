import React from "react";
import Routsss from "./Routsss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NoMatch from "../pages/NoMatch";
import ProductPg from "../pages/product/ProductPg";
import PortfolioPg from "../pages/portfolio/PortfolioPg";
import AboutUs from "../pages/aboutus/AboutUs";
import { ContactUs } from "../pages/contact/ContactUs";

export default function RootFile() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Routsss />} />
          <Route exact path="/career" element={<ProductPg />} />
          <Route exact path="/portfolio" element={<PortfolioPg />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contacts" element={<ContactUs />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}
