import React from "react";
import CountDown from "./CountFunction";

function Hero() {
  return (
    <div className="lg:grid grid-cols-2 gap-3 items-center">
      <div className="col-span-1 py-12 lg:py-0">
        <h1 className="2xl:text-5xl lg:text-4xl sm:text-5xl text-4xl leading-snug 2xl:leading-snug sm:leading-snug lg:leading-snug font-head text-whites tracking-wide">
          Funky Town NFT's
          <br />
          <span className="text-whites">Updates: </span>
        </h1>
        <p className="font-medium text-whites mt-3">Coming Soon!</p>
        <div className="flex-colo w-full sm:w-3/5 border border-whites py-6 px-6 bg-subMain rounded mt-10">
          <h2 className="italic font-semibold text-whites">Next Drop</h2>
          <CountDown />
        </div>
      </div>
      <div className="hero lg:block hidden">
        <img
          src="/Images/funky1.png"
          alt="Main"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
