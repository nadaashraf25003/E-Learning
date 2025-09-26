// Assets
import LiteratureCourseImg from "./../assets/LiteratureCourse.jpg";
import LiteratureCourseImg_2 from "../../public/home3-5.png";

// Components
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import Card from "./../components/Card";

// db
import { literaturecourse } from "../../db";

function LiteratureCourse() {
  return (
    <>
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 lg:px-16">
        <NavBar />
      </div>

      <div className="relative h-[300px] flex items-center justify-center  overflow-hidden max-md:h-full">
        <div
          className="head h-full bg-cover bg-center opacity-70 absolute w-full"
          style={{ backgroundImage: `url(${LiteratureCourseImg})` }}
        ></div>
        <div className="z-10 flex max-md:flex-col items-center justify-between w-full px-15">
          <div className="w-65 h-65 bg-black border-5 border-[#49BBBD] rounded-full overflow-hidden mr-5 max-md:mb-5">
            <img
              src={LiteratureCourseImg_2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/80 text-black p-10 rounded  ">
            <div className="flex items-center justify-between mb-5">
              <div className="left">
                <p className=" text-2xl font-bold ">John Anderson</p>
                <p className=" text-sm text-gray-600">
                  Assistant Professor at Mcmaster University
                </p>
              </div>
              <div className="right">
                <button className="bg-[#49BBBD] text-white px-5 py-2 rounded">
                  Enroll Now
                </button>
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
              <p>4.9 instructor Rating</p>
              <p>1,592 Students</p>
              <p>Courses</p>
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

      <div className="bg-[#e6e4e4]  py-5 px-36 max-md:px-4">
        <div className="categories mt-5 flex gap-4 max-lg:flex-wrap font-bold ">
          <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            About
          </button>
          <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Course
          </button>
          <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Notes
          </button>
          <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Project
          </button>
          <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Podcast
          </button>
          <button className="bg-[#49BBBD] text-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Book
          </button>
          <button className="bg-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            Review
          </button>
        </div>
      </div>

      {/* Literature course */}
      <div className="bg-[#e6e4e4] px-36 pb-16 max-md:px-4">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">Literature course</h1>
        </div>
        <div className="flex flex-wrap justify-start gap-16">
          {literaturecourse.map((course, key) => (
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

      <Footer />
    </>
  );
}

export default LiteratureCourse;
