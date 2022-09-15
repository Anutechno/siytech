import React from "react";
import { TypeEff } from "./TypeEff";

const SlideOne = () => {
  return (
    <>
      <div class="row">
        <div class="row-1 text-left mb-0 text-white">
            <TypeEff/>
          <h1>We Help You To</h1>
          <div class="type-wrap">
            <div id="typed-strings" Style="display:none">
              <span>Create Future.</span>
              <span>Make Life Easier.</span>
              <span>Uplift Your Business.</span>
              <span>Imagine Possibilities.</span>
              <span>Inspire The Next.</span>
            </div>
            <span id="typed" Style="white-space: pre;">
              Inspire The Next.
            </span>
            <span class="typed-cursor typed-cursor--blink" aria-hidden="true">
              |
            </span>
          </div>
        </div>
      </div>
      {/* <div class="row row-1">
        <div class="w-50 text-white">
          <p class="text-left" Style="width:50%">
            We are shaping your dreams into reality as your dreams are special
            to us. We develop apps, website and software in your budget &amp; as
            per your timeline.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default SlideOne;
