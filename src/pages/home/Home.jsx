import React from "react";
import MainSec from "../main-sec/MainSec";
import ServeSec from "../service-sec/ServeSec";
import "./home.css";

function Home() {
  return (
    <>
      <section>
        <MainSec />
      </section>
      <section>
        <ServeSec />
      </section>
    </>
  );
}

export default Home;
