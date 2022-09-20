import React from "react";
import "./usetech.css";

export const Techcomp = ({ icn, name }) => {
  return (
    <>
      <div className="col-md-3 d-flex pt-3 tcmp">
        <div className="p-3 ticn">
          <span>{icn}</span>
        </div>
        <div className="p-3 tpnm">
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};
