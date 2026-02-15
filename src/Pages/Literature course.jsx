

// Components
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import Card from "./../components/Card";
import Pagination from "./../Components/ui/Pagination"; // Import Pagination component

// db
import { literaturecourse } from "../../db";
import { useState } from "react"; // Import useState for pagination state

function LiteratureCourse() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust based on your layout

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to top of courses section for better UX
    const coursesSection = document.querySelector('#courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Calculate paginated data
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return literaturecourse.slice(startIndex, endIndex);
  };

  return (
    <>
        <NavBar />
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 lg:px-16">
      </div>

      <div className="relative h-[300px] flex items-center justify-center overflow-hidden max-md:h-full">
        <div
          className="head h-full bg-cover bg-center opacity-70 absolute w-full"
          style={{ backgroundImage: `url("/LiteratureCourse.jpg")` }}
        ></div>
        <div className="z-10 flex max-md:flex-col items-center justify-between w-full px-15">
          <div className="w-65 h-65 bg-black border-5 border-[#49BBBD] rounded-full overflow-hidden mr-5 max-md:mb-5">
            <img
              src="/home3-5.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/80 text-black p-10 rounded">
            <div className="flex items-center justify-between mb-5">
              <div className="left">
                <p className="text-2xl font-bold">John Anderson</p>
                <p className="text-sm text-gray-600">
                  Assistant Professor at Mcmaster University
                </p>
              </div>
              <div className="right">
                <button className="bg-[#49BBBD] text-white px-5 py-2 rounded hover:bg-[#49BBBD]/90 transition-colors duration-300">
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
                <button className="bg-[#49BBBD] text-white px-3 py-2 rounded-full hover:bg-[#49BBBD]/90 transition-colors duration-300">
                  <i className="fa-brands fa-instagram"></i>
                </button>
                <button className="bg-[#49BBBD] text-white px-3 py-2 rounded-full hover:bg-[#49BBBD]/90 transition-colors duration-300">
                  <i className="fa-brands fa-youtube"></i>
                </button>
                <button className="bg-[#49BBBD] text-white px-3 py-2 rounded-full hover:bg-[#49BBBD]/90 transition-colors duration-300">
                  <i className="fa-brands fa-facebook"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e6e4e4] py-5 px-36 max-md:px-4">
        <div className="categories mt-5 flex gap-4 max-lg:flex-wrap font-bold">
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
      <div id="courses-section" className="bg-[#e6e4e4] px-36 pb-16 max-md:px-4">
        <div className="flex items-center justify-between gap-2 mb-10 pt-10">
          <h1 className="text-2xl font-bold text-center">Literature course</h1>
          <div className="text-gray-600 text-sm">
            Showing {getPaginatedData().length} of {literaturecourse.length} courses
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-16">
          {getPaginatedData().map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        
        {/* Replace old pagination with Pagination component */}
        <Pagination
          currentPage={currentPage}
          totalItems={literaturecourse.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          className="mt-10"
          activeColor="#49BBBD"
          inactiveColor="#f3f2f2"
        />
      </div>

      <Footer />
    </>
  );
}

export default LiteratureCourse;