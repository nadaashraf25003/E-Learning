import NavBar from "./../components/NavBar";
import Card from "./../components/Card";
import { Coursers } from "../../db";
import { nextlesson } from "../../db";
import { category } from "../../db";
import Footer from "../components/Footer";
function Courses() {
  return (
    <>
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 lg:px-16">
        <NavBar />
      </div>
      {/* Welcome back, ready for your next lesson? */}
      <div className="bg-[#e6e4e4]  px-16 pb-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Welcome back, ready for your next lesson?
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer">
            View hisotry
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {nextlesson.map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        <div className="pagination flex items-center justify-center gap-2 mt-10">
          <button className="bg-[#49BBBD] p-3 rounded cursor-pointer hover">1</button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">2</button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">3</button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            ...
          </button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            10
          </button>
        </div>
      </div>

      {/* Choice favourite course from top category */}
      <div className="bg-[#f3f2f2]  p-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Choice favourite course from top category
          </h1>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {category.map((course, key) => (
            <div
              className="card flex flex-col items-center justify-center text-center p-4"
              key={key}
            >
              <div
                style={{
                  backgroundColor: course.bg,
                  width: "60px",
                  height: "60px",
                }}
                className="flex items-center justify-center rounded-full"
              >
                <i
                  className={course.icon}
                  style={{ fontSize: "20px", color: "#fff" }}
                ></i>
              </div>

              <div className="course-name my-2 font-bold text-xl">
                {course.name}
              </div>
              <p className="description my-2">{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended for you */}
      <div className="bg-[#e6e4e4]  p-16">
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
          <button className="bg-[#49BBBD] p-3 rounded cursor-pointer hover">1</button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">2</button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">3</button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            ...
          </button>
          <button className="bg-[#f3f2f2] p-3 rounded cursor-pointer hover">
            10
          </button>
        </div>
      </div>

      {/* Get choice of your course */}
      <div className="bg-[#f3f2f2]  p-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Get choice of your course
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
          <button className="bg-[#49BBBD] p-3 rounded cursor-pointer hover">1</button>
          <button className="bg-[#e6e4e4] p-3 rounded cursor-pointer hover">2</button>
          <button className="bg-[#e6e4e4] p-3 rounded cursor-pointer hover">3</button>
          <button className="bg-[#e6e4e4] p-3 rounded cursor-pointer hover">
            ...
          </button>
          <button className="bg-[#e6e4e4] p-3 rounded cursor-pointer hover">
            10
          </button>
        </div>
      </div>

      {/* Online coaching lessons for remote learning. */}
      <div className="bg-[#e6e4e4] p-16 ">
        <div className="bg-[#252641]  p-16  rounded-2xl">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold text-center text-white">
              Online coaching lessons for remote learning.
            </h1>
            <p className="font-medium text-center text-white w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
              elit, sed do eiusmod tempor
            </p>
            <button
              className="bg-[#49BBBD] p-3 rounded cursor-pointer text-white font-bold
              hover:bg-[#49BBBD]/80 hover:scale-105 transition-all duration-300"
            >
              Start learning now
            </button>
          </div>
        </div>
      </div>

      {/* Student are viewing */}
      <div className="bg-[#f3f2f2]   p-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Student are viewing
          </h1>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {Coursers.map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>

  );
}


export default Courses;
