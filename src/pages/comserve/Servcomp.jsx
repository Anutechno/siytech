import React from "react";
import "./compn.css";

const Servcomp = ({name,icn}) => {
  return (
    <>
      <div className="serv-comp d-flex">
        <div>{name}</div>
        <div>{icn}</div>
      </div>
    </>
  );
};

export default Servcomp;
