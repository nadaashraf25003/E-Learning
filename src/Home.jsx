import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeImg from "./assets/Home.png";

const Home = () => {
  return (
    <>
      <main className="h-[700px] bg-[#49BBBD] overflow-hidden ml-10 ">
        <div className="flex items-center justify-between px-8 py-4">
          <NavBar />

          <div className="flex items-center gap-7 mr-16">
            <button className="uplearn-signin-btn">
              Login
            </button>
            <button className="uplearn-signup-btn">
              Sign Up
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-10 pb-34">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-white mb-15 lg:mb-0 ml-6 lg:pr-10 ">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6  leading-tight ">
                <span className="text-[#F48C06] "> Studying</span> Online is now
                <br></br> much easier
              </h1>
              <p className="text-xl mb-8 opacity-90">
                UpLearn is an interesting platform that will teach you in more
                an interactive way.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="totc-join-btn">
                  Join for free
                </button>
                <button className="flex items-center gap-3 text-white group">
                  <div className="totc-play-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-[#23BDEE] ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-[#252641] group-hover:underline">
                    Watch how it works
                  </span>
                </button>
              </div>
              <p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img
                  src={HomeImg}
                  alt="Student learning online"
                  className="w-full max-w-md mx-auto z-10 relative rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-24 bg-white rounded-t-[100%] absolute bottom-0 left-0"></div>
        
      </main>
    </>
  );
};

export default Home;
