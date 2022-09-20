import React from "react";
import { Techcomp } from "./Techcomp";
import {
  FaEthereum,
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaCss3Alt
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter, SiMongodb, SiMysql, SiBootstrap } from "react-icons/si";
import "./usetech.css";
import Mrtech from "./Mrtech";

const TechnoUse = () => {
  return (
    <>
      <div className="col-md-10 mx-auto pt-5">
        <h3 className="pt-4">TECHNOLOGIES WE USE</h3>
        <div className="col-md-11 mx-auto py-4">
          {/* <marquee behavior="scroll" direction="left" scrollamount="10">
          <FaEthereum />
          <FaReact />
          <TbBrandReactNative />
            Fast Scrolling
          </marquee> */}
          <Mrtech/>
        </div>
        <div className="row pt-4 tc">
          <Techcomp icn={<FaEthereum />} name={"Blockchain"} />
          <Techcomp icn={<FaReact />} name={"React JS"} />
          <Techcomp icn={<TbBrandReactNative />} name={"React Native"} />
          <Techcomp icn={<SiFlutter />} name={"Flutter App"} />
          <Techcomp icn={<FaLaravel />} name={"Laravel"} />
          <Techcomp icn={<FaNodeJs />} name={"Node JS"} />
          <Techcomp icn={<FaPhp />} name={"PHP"} />
          <Techcomp icn={<FaWordpress />} name={"WordPress"} />
          <Techcomp icn={<SiMongodb />} name={"MONGO DB"} />
          <Techcomp icn={<SiMysql />} name={"MySql"} />
          <Techcomp icn={<SiBootstrap />} name={"Bootstrap"} />
          <Techcomp icn={<FaCss3Alt />} name={"CSS"} />
        </div>
      </div>
    </>
  );
};

export default TechnoUse;
