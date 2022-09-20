import React from "react";
import Marquee from "react-fast-marquee";
import "./usetech.css";
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

const Mrtech = () => {
  return (
    <>
      <div>
        <Marquee>
          <div className="mrdiv">
            <span >
              <FaEthereum />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <FaReact />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <FaLaravel />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <FaNodeJs />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <FaPhp />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <FaWordpress />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <FaCss3Alt />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <TbBrandReactNative />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <SiFlutter />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <SiMongodb />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <SiMysql />
            </span>
          </div>
          <div className="mrdiv">
            <span>
              <SiBootstrap />
            </span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Mrtech;
