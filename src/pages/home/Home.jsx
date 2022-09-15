import React from "react";
import ComSer from "../comserve/ComSer";
import MainSec from "../main-sec/MainSec";
import Projectd from "../projectd/Projectd";
import ServeSec from "../service-sec/ServeSec";
import Testimonial from "../testimonial/Testimonial";

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
      <section>
        <ComSer />
      </section>
      <section>
        <Projectd />
      </section>
      <section>
        <Testimonial />
      </section>
    </>
  );
}

export default Home;
