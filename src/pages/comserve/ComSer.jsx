import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./compn.css";
import Servcomp from "./Servcomp";

const ComSer = () => {
  return (
    <>
      <div className="col-md-10 mx-auto pb-4 ser-head">
        <h2>Our Services</h2>
      </div>
      <div className="col-md-10 mx-auto d-flex justify-content-between pb-3 ser-content">
        <div className="col-md-5">
          <Servcomp
            name={"Mobile Solution"}
            icn={<FaRegArrowAltCircleRight />}
          />
          <Servcomp name={"Web Services"} icn={<FaRegArrowAltCircleRight />} />
          <Servcomp
            name={"Software Development"}
            icn={<FaRegArrowAltCircleRight />}
          />
          <Servcomp
            name={"Game Development"}
            icn={<FaRegArrowAltCircleRight />}
          />
          <Servcomp name={"Blockchain"} icn={<FaRegArrowAltCircleRight />} />
        </div>
        <div className="col-md-5 comser">
          <img src="./pic/serv.svg" alt="ser" />
        </div>
      </div>
      <div className="getst col-md-10 mx-auto">
        <span>Get Start</span>
      </div>
    </>
  );
};

export default ComSer;
