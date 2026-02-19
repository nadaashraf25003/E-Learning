// Courses.jsx
import React, { useState, useMemo } from "react";

// Components
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pagination from "../components/ui/Pagination";

// db
import { Coursers } from "../../db";
import { nextlesson } from "../../db";
import { category } from "../../db";

function Courses() {
  // Pagination states
  const [pagination, setPagination] = useState({
    nextLesson: { currentPage: 1, itemsPerPage: 4 },
    recommended: { currentPage: 1, itemsPerPage: 4 },
    choiceCourse: { currentPage: 1, itemsPerPage: 4 },
    studentViewing: { currentPage: 1, itemsPerPage: 4 },
  });

  // Handle page change
  const handlePageChange = (section, newPage) => {
    setPagination(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        currentPage: newPage
      }
    }));
    
    // Scroll to top of the section for better UX
    const sectionElement = document.querySelector(`#${section}-section`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper function to get paginated data
  const getPaginatedData = (data, section) => {
    const { currentPage, itemsPerPage } = pagination[section];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Calculate total items for each section
  const totalItems = {
    nextLesson: nextlesson.length,
    recommended: Coursers.length,
    choiceCourse: Coursers.length,
    studentViewing: Coursers.length,
  };

  return (
    <>
      <NavBar />
      
      {/* Welcome back, ready for your next lesson? */}
      <div id="nextLesson-section" className="bg-white px-16 pb-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Welcome back, ready for your next lesson?
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer hover:underline">
            View history
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {getPaginatedData(nextlesson, 'nextLesson').map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        <Pagination
          currentPage={pagination.nextLesson.currentPage}
          totalItems={totalItems.nextLesson}
          itemsPerPage={pagination.nextLesson.itemsPerPage}
          onPageChange={(page) => handlePageChange('nextLesson', page)}
          className="mt-10"
        />
      </div>

      {/* Choice favourite course from top category */}
      <div className="bg-[#f3f2f2] p-16">
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
      <div id="recommended-section" className="bg-[#e6e4e4] p-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Recommended for you
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer hover:underline" >
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {getPaginatedData(Coursers, 'recommended').map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        <Pagination
          currentPage={pagination.recommended.currentPage}
          totalItems={totalItems.recommended}
          itemsPerPage={pagination.recommended.itemsPerPage}
          onPageChange={(page) => handlePageChange('recommended', page)}
          className="mt-10"
          activeColor="#49BBBD"
          inactiveColor="#f3f2f2"
        />
      </div>

      {/* Get choice of your course */}
      <div id="choiceCourse-section" className="bg-[#f3f2f2] p-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Get choice of your course
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer hover:underline">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {getPaginatedData(Coursers, 'choiceCourse').map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        <Pagination
          currentPage={pagination.choiceCourse.currentPage}
          totalItems={totalItems.choiceCourse}
          itemsPerPage={pagination.choiceCourse.itemsPerPage}
          onPageChange={(page) => handlePageChange('choiceCourse', page)}
          className="mt-10"
          activeColor="#49BBBD"
          inactiveColor="#e6e4e4"
        />
      </div>

      {/* Online coaching lessons for remote learning. */}
      <div className="bg-[#e6e4e4] p-16">
        <div className="bg-[#252641] p-16 rounded-2xl">
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

      {/* Students are viewing */}
      <div id="studentViewing-section" className="bg-[#f3f2f2] p-16">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">
            Students are viewing
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer hover:underline">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {getPaginatedData(Coursers, 'studentViewing').map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        <Pagination
          currentPage={pagination.studentViewing.currentPage}
          totalItems={totalItems.studentViewing}
          itemsPerPage={pagination.studentViewing.itemsPerPage}
          onPageChange={(page) => handlePageChange('studentViewing', page)}
          className="mt-10"
        />
      </div>
      
      <Footer />
    </>
  );
}

export default Courses;