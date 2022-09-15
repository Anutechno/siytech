import React from "react";
import Routsss from "./Routsss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NoMatch from "../pages/NoMatch";

export default function RootFile() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Routsss />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}
