// React

// Assets
import home2_1 from "./../../public/home2-1.png";
import CourseDetailImg from "../../public/CourseDetail.jpg";

// Components
import Card from "./../components/Card";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";

// db
import { Coursers } from "../../db";

function CourseDetail() {
  return (
    <>
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 max-lg:px-16">
        <NavBar />
      </div>

      <div className="relative h-[500px] flex items-center justify-center  overflow-hidden max-md:h-full">
        <div
          className="head h-full bg-cover bg-center absolute w-full"
          style={{ backgroundImage: `url(${CourseDetailImg})` }}
        ></div>
      </div>

      <div className="bg-[#f3f2f2]  py-5 px-36 max-lg:px-10 max-md:px-4">
        <div className="categories mt-5 flex gap-4 max-lg:flex-wrap font-bold ">
          <button className="bg-white px-10 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Overview
          </button>
          <button className="bg-white px-10 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Overview
          </button>
          <button className="bg-white px-10 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Overview
          </button>
          <button className="bg-[#49BBBD] px-10 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Overview
          </button>
        </div>

        <div className="flex max-md:flex-col gap-10  mt-10">
          <div className="course-detail bg-[#9DCCFF4D] rounded-lg shadow-lg p-10 mt-10 ">
            <div className="first flex max-md:flex-col gap-10 mb-5">
              <div className="left bg-white p-5 rounded text-center  shadow-lg mb-5">
                <p className="font-bold text-3xl mb-5">4 out of 5</p>
                <span className="text-lg mr-1">
                  <i className="fa fa-star text-[#49BBBD]"></i>
                </span>
                <span className="text-lg mr-1">
                  <i className="fa fa-star text-[#49BBBD]"></i>
                </span>
                <span className="text-lg mr-1">
                  <i className="fa fa-star text-[#49BBBD]"></i>
                </span>
                <span className="text-lg mr-1">
                  <i className="fa fa-star text-[#49BBBD]"></i>
                </span>
                <p className="font-bold mt-3">Top rating</p>
              </div>
              <div className="righ">
                <p className="font-bold flex items-center justify-center gap-2 rounded text-center mb-3  ">
                   Stars
                  <progress
                    className="w-50 rounded h-2 bg-white"
                    value="80"
                    max="100"
                  ></progress>
                </p>
                 <p className="font-bold flex items-center justify-center gap-2 rounded text-center mb-3  ">
                   Stars
                  <progress
                    className="w-50 rounded h-2 bg-white"
                    value="80"
                    max="100"
                  ></progress>
                </p>
                 <p className="font-bold flex items-center justify-center gap-2 rounded text-center mb-3  ">
                   Stars
                  <progress
                    className="w-50 rounded h-2 bg-white"
                    value="80"
                    max="100"
                  ></progress>
                </p>
                 <p className="font-bold flex items-center justify-center gap-2 rounded text-center mb-3  ">
                   Stars
                  <progress
                    className="w-50 rounded h-2 bg-white"
                    value="80"
                    max="100"
                  ></progress>
                </p>
                 <p className="font-bold flex items-center justify-center gap-2 rounded text-center mb-3  ">
                   Stars
                  <progress
                    className="w-50 rounded h-2 bg-white"
                    value="80"
                    max="100"
                  ></progress>
                </p>
              </div>
            </div>
            <div className="second">
              <div className="instructor flex items-center gap-2">
                <img
                  src={CourseDetailImg}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                  className="rounded-full"
                />
                <p className="instructor-name font-bold">
                  Lina <br />
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur quam qui vero veniam eos numquam?
              </p>
            </div>
            <hr className="my-5" />
            <div className="second">
              <div className="instructor flex items-center gap-2">
                <img
                  src={CourseDetailImg}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                  className="rounded-full"
                />
                <p className="instructor-name font-bold">
                  Lina <br />
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#49BBBD]"></i>
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur quam qui vero veniam eos numquam?
              </p>
            </div>
          </div>
          <div className="course-detail bg-[#9DCCFF4D] rounded-lg shadow-lg p-5 mt-10 w-150 max-md:w-full">
            <div className="first text-center">
              <img src={CourseDetailImg} alt="" />
              <p>
                <span className="font-bold text-3xl mr-5">$49.56</span> <span className="font-bold text-[#49BBBD] line-through">$99.99 50% off</span>
              </p>
              <p className="font-bold text-[#49BBBD] text-sm my-2">11 hour left at this price</p>
              <button className="bg-[#49BBBD] text-white rounded font-bold px-5 py-2 mt-5 cursor-pointer">Buy Now</button>
            </div>
            <hr className="my-5"/>
            <div className="second">
              <p className="font-bold text-xl mb-3">This Course included</p>
              <ul>
                <li className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#49BBBD] rounded-full inline-block mr-2"></div>
                  Money Back Guarantee
                </li>
                <li className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#49BBBD] rounded-full inline-block mr-2"></div>
                  Access on all devices
                </li>
                <li className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#49BBBD] rounded-full inline-block mr-2"></div>
                  Certification of completion
                </li>
                <li className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#49BBBD] rounded-full inline-block mr-2"></div>
                  32 Moduls
                </li>
              </ul>
            </div>
            <hr className="my-5"/>
            <div className="Third">
              <p className="font-bold text-xl mb-3">Share this course</p>
              <div className="flex items-center justify-start gap-2 text-lg">
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
              style={{ backgroundImage: `url(${home2_1})` }}
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
              style={{ backgroundImage: `url(${home2_1})` }}
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
              style={{ backgroundImage: `url(${home2_1})` }}
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
