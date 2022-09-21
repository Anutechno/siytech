import React from "react";
import "./contact.css";
import Sfooter from "../../components/footer/Sfooter";
import Header from "../../components/header/Header";
import Contectcom from "./Contectcom";


export const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="col-md-10 mx-auto"><Contectcom/></div>
      <Sfooter />
    </>
  );
};
