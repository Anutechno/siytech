import React from "react";
import "./projectd.css";

const ProCom = ({ proname,iamge }) => {
  return (
    <>
      <div className="col-md-4 text-center procom py-4 px-4">
        <h6 className="py-3">{proname}</h6>
        <img src={iamge} alt="iamge"/>
      </div>
    </>
  );
};

export default ProCom;
