// React

// Assets
import SearchImg from "./../assets/Search.jpg";

// Components
import Card from "./../components/Card";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";

// db
import { Coursers } from "../../db";
import { nextlesson } from "../../db";
import { category } from "../../db";

function CourseDetail() {
  return (
    <>
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 max-lg:px-16">
        <NavBar />
      </div>

      {/* Marketing Articles */}
      <div className="bg-[#e6e4e4] p-16 max-md:px-4">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">Marketing Articles</h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {Coursers.map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
      </div>

      {/* Everything you can do in a physical classroom */}
      <div className="bg-[#f3f2f2]   flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 p-16 max-md:px-5 ">
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-[#2F327D] text-2xl sm:text-3xl font-semibold">
            Everything you can do in a physical classroom,{" "}
            <span className="text-[#00CBB8]">you can do with UpLearn.</span>
          </p>
          <p className="text-[#696984] text-base sm:text-lg mt-10">
            UpLearn's school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
        </div>

        <div
          className="relative bg-cover bg-center rounded-2xl shadow-lg w-full max-w-md h-[250px] sm:h-[290px] flex items-center justify-center text-center transition-transform"
          style={{ backgroundImage: "url('/home2-3.png')" }}
        />
      </div>

      {/* Top Education offers and deals are listed here */}
      <div className="bg-[#f3f2f2] p-16 max-md:px-4">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10 px-15">
          <h1 className="text-2xl font-bold text-center">
            Top Education offers and deals are listed here
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-15 px-15 max-md:px-4">
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

export default CourseDetail;
