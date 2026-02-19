import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Pagination from "../components/ui/Pagination";
import { Coursers, creators } from "../../db";

function Search() {
  // States for search and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(Coursers);
  const [filteredCreators, setFilteredCreators] = useState(creators);

  // Pagination states
  const [pagination, setPagination] = useState({
    allCourses: { currentPage: 1, itemsPerPage: 4 },
    recommended: { currentPage: 1, itemsPerPage: 4 },
    creators: { currentPage: 1, itemsPerPage: 4 }
  });

  // Filter courses based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCourses(Coursers);
      setFilteredCreators(creators);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = Coursers.filter(course =>
        course.name.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)
      );
      setFilteredCourses(filtered);

      const filteredCreatorsList = creators.filter(creator =>
        creator.name.toLowerCase().includes(query) ||
        creator.description.toLowerCase().includes(query)
      );
      setFilteredCreators(filteredCreatorsList);
    }
  }, [searchQuery]);

  // Handle search
  const handleSearch = () => {
    // The useEffect already handles filtering
    // Reset pagination to first page when searching
    setPagination({
      ...pagination,
      allCourses: { ...pagination.allCourses, currentPage: 1 },
      recommended: { ...pagination.recommended, currentPage: 1 }
    });
  };

  // Handle page change
  const handlePageChange = (section, newPage) => {
    setPagination(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        currentPage: newPage
      }
    }));
  };

  // Helper function to get paginated data
  const getPaginatedData = (data, section) => {
    const { currentPage, itemsPerPage } = pagination[section];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Get total items count
  const totalItems = {
    allCourses: filteredCourses.length,
    recommended: Coursers.length,
    creators: filteredCreators.length
  };

  // Handle key press for search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 lg:px-16"></div>

      {/* Search bar with filter */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden max-md:h-full">
        <div
          className="head h-full bg-cover bg-center opacity-70 absolute w-full"
          style={{ backgroundImage: `url("/Search.jpg")` }}
        ></div>
        <div className="z-10 flex flex-col items-center w-full px-4 sm:px-8 lg:px-16 max-md:py-2">
          <div className="w-full max-w-4xl">
            <div className="search_input w-full p-3 pl-10 bg-white rounded-lg flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 shadow-lg">
              <div className="flex-1">
                <input
                  type="search"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search your favourite course"
                  className="w-full outline-none text-gray-700 placeholder-gray-500 text-base sm:text-lg"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-teal-500 text-white px-6 sm:px-10 py-2 sm:py-3 rounded font-bold text-base sm:text-lg hover:bg-teal-600 hover:scale-105 transition-transform duration-300 cursor-pointer whitespace-nowrap"
              >
                Search
              </button>
            </div>
            
            <div className="categories mt-5 flex flex-wrap gap-2 justify-center">
              <button className="bg-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Subject <i className="fa-solid fa-chevron-down ml-2 sm:ml-5"></i>
              </button>
              <button className="bg-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Partner <i className="fa-solid fa-chevron-down ml-2 sm:ml-5"></i>
              </button>
              <button className="bg-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Program <i className="fa-solid fa-chevron-down ml-2 sm:ml-5"></i>
              </button>
              <button className="bg-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Language <i className="fa-solid fa-chevron-down ml-2 sm:ml-5"></i>
              </button>
              <button className="bg-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Availability <i className="fa-solid fa-chevron-down ml-2 sm:ml-5"></i>
              </button>
              <button className="bg-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Learning Type <i className="fa-solid fa-chevron-down ml-2 sm:ml-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Summary */}
      <div className="bg-[#e6e4e4] px-4 sm:px-8 lg:px-16 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {searchQuery ? `Search Results for "${searchQuery}"` : "All Courses"}
          </h1>
          <div className="text-gray-600 text-sm mt-2 sm:mt-0">
            Showing {getPaginatedData(filteredCourses, 'allCourses').length} of {filteredCourses.length} courses
          </div>
        </div>
      </div>

      {/* All Courses */}
      <div className="bg-[#e6e4e4] p-16 sm:p-8 lg:p-16 ">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-start gap-4 sm:gap-5">
              {getPaginatedData(filteredCourses, 'allCourses').map((course, key) => (
                <Card key={key} course={course} />
              ))}
            </div>
            
            {/* Pagination for all courses */}
            <Pagination
              currentPage={pagination.allCourses.currentPage}
              totalItems={totalItems.allCourses}
              itemsPerPage={pagination.allCourses.itemsPerPage}
              onPageChange={(page) => handlePageChange('allCourses', page)}
              className="mt-8 sm:mt-10"
              activeColor="#49BBBD"
              inactiveColor="#f3f2f2"
            />
          </>
        )}
      </div>

      {/* Know about learning platform */}
      <div className="bg-white px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 px-4 lg:pl-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-gray-800">
            Know about our learning platform
          </h2>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <li className="flex items-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#49BBBD] rounded-full inline-block mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-sm sm:text-base">Free E-book, video & consultation</span>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#49BBBD] rounded-full inline-block mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-sm sm:text-base">Top instructors from around the world</span>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#49BBBD] rounded-full inline-block mr-2 sm:mr-3"></div>
              <span className="text-gray-700 text-sm sm:text-base">Top courses for your team</span>
            </li>
          </ul>
          <button
            className="bg-[#49BBBD] text-white font-bold px-5 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-[#3F9F9F] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Start learning now
          </button>
        </div>
        
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute -top-3 sm:-top-4 left-0 right-0 mx-auto w-full max-w-xl h-6 sm:h-7 bg-[#E5E5E5] z-10 rounded-lg flex items-center px-3 gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#EE6767] rounded-full" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F6C566] rounded-full" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#5BEB7B] rounded-full" />
            </div>

            <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-[#F4F4F4]/90 rounded-lg pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-4">
              <div
                className="relative bg-cover bg-center rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
                style={{ backgroundImage: "url('/home3-1.png')" }}
              />
              <div
                className="relative bg-cover bg-center rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
                style={{ backgroundImage: "url('/home3-2.png')" }}
              />
              <div
                className="relative bg-cover bg-center rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
                style={{ backgroundImage: "url('/home3-5.png')" }}
              />
              <div
                className="relative bg-cover bg-center rounded-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
                style={{ backgroundImage: "url('/home3-4.png')" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recommended for you */}
      <div className="bg-[#e6e4e4] p-16 sm:p-8 lg:p-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left text-gray-800">
            Recommended for you
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer hover:underline text-sm sm:text-base">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-4 sm:gap-5">
          {getPaginatedData(Coursers, 'recommended').map((course, key) => (
            <Card key={key} course={course} />
          ))}
        </div>
        
        {/* Pagination for recommended courses */}
        <Pagination
          currentPage={pagination.recommended.currentPage}
          totalItems={totalItems.recommended}
          itemsPerPage={pagination.recommended.itemsPerPage}
          onPageChange={(page) => handlePageChange('recommended', page)}
          className="mt-8 sm:mt-10"
          activeColor="#49BBBD"
          inactiveColor="#f3f2f2"
        />
      </div>

      {/* Classes taught by real creators */}
      <div className="bg-[#f3f2f2] py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left text-gray-800">
            Classes taught by real creators
          </h1>
          <div className="text-gray-600 text-sm">
            Showing {getPaginatedData(filteredCreators, 'creators').length} of {filteredCreators.length} creators
          </div>
        </div>
        
        {filteredCreators.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No creators found matching your search.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              {getPaginatedData(filteredCreators, 'creators').map((creator, key) => (
                <Card key={key} course={creator} />
              ))}
            </div>
            
            {/* Pagination for creators */}
            <Pagination
              currentPage={pagination.creators.currentPage}
              totalItems={totalItems.creators}
              itemsPerPage={pagination.creators.itemsPerPage}
              onPageChange={(page) => handlePageChange('creators', page)}
              className="mt-8 sm:mt-10"
              activeColor="#49BBBD"
              inactiveColor="#f3f2f2"
            />
          </>
        )}
      </div>

      {/* What our students have to say */}
      <div className="bg-[#e6e4e4] p-4 sm:p-8 lg:p-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-gray-800">
          What our students have to say
        </h2>
        <div className="bg-white/80 text-black p-4 sm:p-6 lg:p-10 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="w-full h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden">
            <img src="/home3-6.jpg" alt="Student testimonial" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-0 sm:px-4 lg:px-8">
            <div className="mb-4 sm:mb-5">
              <p className="text-xl sm:text-2xl font-bold">John Anderson</p>
              <p className="text-sm text-gray-600 mt-1">
                Assistant Professor at McMaster University
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5 sm:mt-6">
              <button className="bg-[#49BBBD] text-white w-10 h-10 rounded-full hover:bg-[#3F9F9F] transition-colors duration-300">
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button className="bg-[#49BBBD] text-white w-10 h-10 rounded-full hover:bg-[#3F9F9F] transition-colors duration-300">
                <i className="fa-brands fa-youtube"></i>
              </button>
              <button className="bg-[#49BBBD] text-white w-10 h-10 rounded-full hover:bg-[#3F9F9F] transition-colors duration-300">
                <i className="fa-brands fa-facebook"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Education offers and deals are listed here */}
      <div className="bg-[#f3f2f2] p-4 sm:p-8 lg:p-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left text-gray-800">
            Top Education offers and deals
          </h1>
          <button className="font-bold text-[#49BBBD] cursor-pointer hover:underline text-sm sm:text-base">
            See all
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { id: 1, image: "./blog4.png", discount: "50%", title: "Web Development Mastery", description: "Complete web development course with hands-on projects" },
            { id: 2, image: "./blog3.png", discount: "10%", title: "Data Science Fundamentals", description: "Learn data analysis and machine learning from scratch" },
            { id: 3, image: "./blog5.png", discount: "50%", title: "UI/UX Design Bootcamp", description: "Master user interface and experience design principles" }
          ].map((offer) => (
            <div key={offer.id} className="relative bg-black rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div
                style={{ backgroundImage: `url(${offer.image})` }}
                className="w-full h-56 sm:h-64 bg-cover bg-center rounded-2xl opacity-70 group-hover:opacity-80 transition-opacity duration-300"
              ></div>
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5">
                <div className="bg-[#49BBBD] text-white font-bold px-3 sm:px-4 py-2 rounded w-16 sm:w-20">
                  {offer.discount}
                </div>
                <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-white">
                  {offer.title}
                </p>
                <p className="text-white text-sm sm:text-base mt-2">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Search;