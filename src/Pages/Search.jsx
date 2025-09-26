// Assets
import SearchImg from "./../assets/Search.jpg";
import Student from "./../../public/home3-6.jpg";

// Components
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import Card from "./../components/Card";

// db
import { Coursers } from "../../db";
import { creators } from "../../db";

function Search() {
  return (
    <>
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 lg:px-16">
        <NavBar />
      </div>

      {/* Search bar with filter */}
      <div className="relative h-[300px] flex items-center justify-center  overflow-hidden max-md:h-full ">
        <div
          className="head h-full bg-cover bg-center opacity-70 absolute w-full"
          style={{ backgroundImage: `url(${SearchImg})` }}
        ></div>
        <div className="z-10 flex flex-col items-center w-full px-60 max-lg:px-5 max-md:py-2">
          <div className="search_input w-full  p-2 pl-10 bg-white  rounded flex justify-between gap-4">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search your favourite course"
              className="w-full outline-none"
            />
            <button
              className="bg-teal-500 text-white px-10 py-2 rounded font-bold text-lg
                 hover:bg-teal-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Search
            </button>
          </div>
          <div className="categories mt-5 flex gap-4 max-lg:flex-wrap justify-center">
            <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
              Subject <i className="fa-solid fa-chevron-down ml-5"></i>
            </button>
            <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
              Partner <i className="fa-solid fa-chevron-down ml-5"></i>
            </button>
            <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
              Program <i className="fa-solid fa-chevron-down ml-5"></i>
            </button>
            <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
              Language <i className="fa-solid fa-chevron-down ml-5"></i>
            </button>
            <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
              Abaliability <i className="fa-solid fa-chevron-down ml-5"></i>
            </button>
            <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
              Learning Type <i className="fa-solid fa-chevron-down ml-5"></i>
            </button>
          </div>
        </div>
      </div>

      {/* All Courses */}
      <div className="bg-[#e6e4e4]  p-16 max-md:px-4">
        <div className="flex flex-wrap justify-start gap-5">
          {Coursers.map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
      </div>

      {/* Know about learning platform */}
      <div className="bg-white  md:px-20 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-30 max-md:py-10">
        <div className="pl-32 max-md:px-5">
          <h2 className="text-3xl font-bold mb-5">
            Know about learning learning platform
          </h2>
          <ul>
            <li className="flex items-center mb-3">
              <div className="w-5 h-5 bg-[#49BBBD] rounded-full inline-block mr-2"></div>
              Free E-book, video & consolation
            </li>
            <li className="flex items-center mb-3">
              <div className="w-5 h-5 bg-[#49BBBD] rounded-full inline-block mr-2"></div>
              Top instructors from around world
            </li>
            <li className="flex items-center mb-3">
              <div className="w-5 h-5 bg-[#49BBBD] rounded-full inline-block mr-2"></div>
              Top courses from your team
            </li>
          </ul>
          <button
            className="bg-[#49BBBD] text-white font-bold px-5 py-3 rounded mt-5
            hover:bg-[#3F9F9F] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Start learning now
          </button>
        </div>
        <div className="relative w-full max-w-md">
          <div className="absolute -top-4 left-0 right-0 mx-auto w-full max-w-[3000px] h-7 bg-[#E5E5E5] z-10 rounded-lg flex items-center px-3 gap-2">
            <div className="w-3 h-3 bg-[#EE6767] rounded-full" />
            <div className="w-3 h-3 bg-[#F6C566] rounded-full" />
            <div className="w-3 h-3 bg-[#5BEB7B] rounded-full" />
          </div>

          <div className="w-full h-70 sm:h-72 md:h-80 bg-[#F4F4F4]/90 rounded-lg pt-8 flex items-center justify-center flex-wrap max-md:h-full gap-2">
            <div
              className="relative bg-cover bg-center rounded-2xl w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52"
              style={{ backgroundImage: "url('/home3-1.png')" }}
            />
            <div
              className="relative bg-cover bg-center rounded-2xl w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52"
              style={{ backgroundImage: "url('/home3-2.png')" }}
            />
            <div
              className="relative bg-cover bg-center rounded-2xl w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52"
              style={{ backgroundImage: "url('/home3-5.png')" }}
            />
            <div
              className="relative bg-cover bg-center rounded-2xl w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52"
              style={{ backgroundImage: "url('/home3-4.png')" }}
            />
          </div>
        </div>
      </div>

      {/* Recommended for you */}
      <div className="bg-[#e6e4e4]  p-16 max-md:px-4">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Recommended for you
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {Coursers.map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        <div className="pagination flex items-center justify-center gap-2 mt-10">
          <button className="bg-[#49BBBD] p-3 rounded cursor-pointer hover">
            1
          </button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            2
          </button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            3
          </button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            ...
          </button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            10
          </button>
        </div>
      </div>

      {/* Classes tought by real creators */}
      <div className="bg-[#f3f2f2] py-16 px-32 max-md:px-4">
        <div className="flex items-center justify-center gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Classes tought by real creators
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {creators.map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
      </div>

      {/* What our students have to say */}
      <div className="bg-[#e6e4e4]  p-16 max-md:px-4">
        <h2 className="text-3xl font-bold mb-10">
          What our students have to say
        </h2>
        <div className="bg-white/80 text-black p-10 rounded grid grid-cols-2 gap-0 max-md:grid-cols-1 ">
          <div className="left w-95 h-95  rounded-full overflow-hidden  max-md:mb-5 max-md:w-full max-md:h-96">
            <img src={Student} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="right -ml-32 mr-32 max-md:mr-4 flex flex-col justify-center max-md:ml-0 max-md:mt-5">
            <div className="flex items-center justify-between mb-5">
              <div className="left">
                <p className=" text-2xl font-bold ">John Anderson</p>
                <p className=" text-sm text-gray-600">
                  Assistant Professor at Mcmaster University
                </p>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut
                enum ad minim veniam, quis nostrud
              </p>
            </div>
            <div className="flex items-center justify-between mt-5 text-gray-600 max-sm:flex-col max-sm:items-start gap-3">
              <div className="flex items-center justify-center gap-2 text-lg">
                <button className="bg-[#49BBBD] text-white px-3 py-2 rounded-full">
                  <i className="fa-brands fa-instagram"></i>
                </button>
                <button className="bg-[#49BBBD] text-white px-3 py-2 rounded-full">
                  <i className="fa-brands fa-youtube"></i>
                </button>
                <button className="bg-[#49BBBD] text-white px-3 py-2 rounded-full">
                  <i className="fa-brands fa-facebook"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Education offers and deals are listed here */}
      <div className="bg-[#f3f2f2]  p-16 max-md:px-4">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10 px-15">
          <h1 className="text-2xl font-bold text-center">
            Top Education offers and deals are listed here
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-15 px-15 max-md:px-5">
          <div className="relative w-90 h-70 bg-black rounded-3xl max-md:w-full overflow-hidden">
            <div
              style={{ backgroundImage: `url(${SearchImg})` }}
              className="w-90 h-70 bg-cover bg-center rounded-3xl opacity-70  top-0 left-0 max-md:w-full"
            ></div>
            <div className=" absolute top-5 left-5">
              <div className="bg-[#49BBBD] text-white font-bold px-5 py-3 rounded mt-5 w-20">
                50%
              </div>
              <p className="mt-5 text-xl font-bold text-white">
                Lorem, ipsum dolor.
              </p>
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ut corrupti soluta id nihil voluptatum?
              </p>
            </div>
          </div>
          <div className="relative w-90 h-70 bg-black rounded-3xl max-md:w-full overflow-hidden">
            <div
              style={{ backgroundImage: `url(${SearchImg})` }}
              className="w-90 h-70 bg-cover bg-center rounded-3xl  opacity-70  top-0 left-0 max-md:w-full"
            ></div>
            <div className=" absolute top-5 left-5">
              <div className="bg-[#49BBBD] text-white font-bold px-5 py-3 rounded mt-5 w-20">
                10%
              </div>
              <p className="mt-5 text-xl font-bold text-white">
                Lorem, ipsum dolor.
              </p>
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ut corrupti soluta id nihil voluptatum?
              </p>
            </div>
          </div>
          <div className="relative w-90 h-70 bg-black rounded-3xl max-md:w-full overflow-hidden">
            <div
              style={{ backgroundImage: `url(${SearchImg})` }}
              className="w-90 h-70 bg-cover bg-center rounded-3xl  opacity-70  top-0 left-0 max-md:w-full"
            ></div>
            <div className=" absolute top-5 left-5">
              <div className="bg-[#49BBBD] text-white font-bold px-5 py-3 rounded mt-5 w-20">
                50%
              </div>
              <p className="mt-5 text-xl font-bold text-white">
                Lorem, ipsum dolor.
              </p>
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ut corrupti soluta id nihil voluptatum?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Search;
