import React from "react";
import Sfooter from "../../components/footer/Sfooter";
import Header from "../../components/header/Header";
import "./about.css";
import BootAbUs from "./BootAbUs";

const AboutUs = () => {

  let arr1 = [1, 2, 3, 4, 5, 6];
  let arr2 = arr1.forEach((item) => {
    return item + 2;
  });
  console.log(arr2);
  // Output: undefined

  let arr = [1, 2, 3, 4, 5, 6];
  arr.forEach((item, index) => {
    console.log(item + 2);
  });
  
  console.log(arr);
  return (
    <>
      <Header />
      <BootAbUs />
      {}
      <Sfooter />
    </>
  );
};

export default AboutUs;
