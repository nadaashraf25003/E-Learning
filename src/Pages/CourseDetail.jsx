// React
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Assets


// Components
import Card from "./../components/Card";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";
import Pagination from "../Components/ui/Pagination"; // Import Pagination

// db
import { getCourseById, Coursers } from "../../db";

function CourseDetail() {
  // Get course ID from URL parameters
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State for course data and related courses
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // For related courses pagination

  // Fetch course data when component mounts or ID changes
  useEffect(() => {
    if (id) {
      const courseData = getCourseById(Number(id));
      if (courseData) {
        setCourse(courseData);
        
        // Get related courses (same category)
        const related = Coursers.filter(
          c => c.category === courseData.category && c.id !== courseData.id
        );
        setRelatedCourses(related);
      } else {
        // Redirect to courses page if course not found
        navigate("/courses");
      }
    }
  }, [id, navigate]);

  // Handle page change for related courses
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Get paginated related courses
  const getPaginatedRelatedCourses = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return relatedCourses.slice(startIndex, endIndex);
  };

  // Loading state
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#49BBBD] text-2xl">Loading course details...</div>
      </div>
    );
  }

  return (
    <>
        <NavBar />
      <div className="bg-[#49BBBD] overflow-hidden px-4 sm:px-8 max-lg:px-16">
      </div>

      {/* Course Header */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden max-md:h-full">
        <div
          className="head h-full bg-cover bg-center absolute w-full"
          style={{ backgroundImage: `url(${course.courseImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">{course.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-[#49BBBD] px-4 py-2 rounded-full">
               {course.rating} ({course.reviews} reviews)
            </span>
            <span className="bg-[#49BBBD] px-4 py-2 rounded-full">
               {course.students.toLocaleString()} students
            </span>
            <span className="bg-[#49BBBD] px-4 py-2 rounded-full">
               {course.duration}
            </span>
            <span className="bg-[#49BBBD] px-4 py-2 rounded-full">
               {course.level}
            </span>
          </div>
          <button 
            onClick={() => navigate("/enroll/" + course.id)}
            className="bg-white text-[#49BBBD] font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Enroll Now for {course.newPrice}
          </button>
        </div>
      </div>

      {/* Course Navigation Tabs */}
      <div className="bg-[#f3f2f2] py-5 px-4 sm:px-8 lg:px-36">
        <div className="categories mt-5 flex flex-wrap gap-4 font-bold">
          <button 
            onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white px-6 py-3 rounded cursor-pointer hover:scale-105 transition-transform duration-300"
          >
             Overview
          </button>
          <button 
            onClick={() => document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white px-6 py-3 rounded cursor-pointer hover:scale-105 transition-transform duration-300"
          >
             Curriculum
          </button>
          <button 
            onClick={() => document.getElementById('instructor').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white px-6 py-3 rounded cursor-pointer hover:scale-105 transition-transform duration-300"
          >
             Instructor
          </button>
          <button 
            onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#49BBBD] text-white px-6 py-3 rounded cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Reviews
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#f3f2f2] py-10 px-4 sm:px-8 lg:px-36">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Course Details */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <div id="overview" className="bg-white rounded-xl shadow-lg p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-[#2F327D]">Course Overview</h2>
              <p className="text-gray-700 mb-6">{course.detailedDescription || course.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-[#49BBBD]">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {course.learningOutcomes?.slice(0, 4).map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#49BBBD] mr-2">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#f8f9fa] p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-[#49BBBD]">Course Requirements</h3>
                  <ul className="space-y-2">
                    {course.requirements?.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#49BBBD] mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Curriculum Section */}
            <div id="curriculum" className="bg-white rounded-xl shadow-lg p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-[#2F327D]">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum?.map((module, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-[#49BBBD] transition-colors duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-lg">Module {module.module}: {module.title}</h3>
                      <span className="text-gray-600">{module.lessons} lessons</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.topics?.map((topic, idx) => (
                        <span key={idx} className="bg-[#f0f9ff] text-[#49BBBD] px-3 py-1 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Section */}
            <div id="instructor" className="bg-white rounded-xl shadow-lg p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-[#2F327D]">Instructor</h2>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={course.instructorImg}
                  alt={course.instructor}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{course.instructor}</h3>
                  <p className="text-gray-600 mb-4">{course.instructorBio}</p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <i className="fa fa-star text-[#49BBBD] mr-1"></i>
                      <span className="font-bold">{course.rating}</span>
                    </span>
                    <span> {course.students.toLocaleString()} students</span>
                    <span> {course.reviewsList?.length || 0} reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div id="reviews" className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#2F327D]">Student Reviews</h2>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#49BBBD]">{course.rating}</div>
                  <div className="text-gray-600">Course Rating</div>
                </div>
              </div>
              
              <div className="space-y-6">
                {course.reviewsList?.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={review.reviewerImg}
                          alt={review.reviewer}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold">{review.reviewer}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <i 
                                key={i} 
                                className={`fa fa-star ${i < review.rating ? 'text-[#49BBBD]' : 'text-gray-300'}`}
                              ></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Course Action Card */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-[#49BBBD] mb-2">{course.newPrice}</p>
                  <p className="text-gray-500 line-through mb-4">{course.oldPrice} <span className="text-red-500 ml-2">50% off</span></p>
                  <p className="text-sm text-gray-600 mb-6">Limited time offer</p>
                  
                  <button 
                    onClick={() => navigate("/enroll/" + course.id)}
                    className="w-full bg-[#49BBBD] text-white font-bold py-3 rounded-lg text-lg hover:bg-[#3aa9ab] transition-colors duration-300 mb-4"
                  >
                    Enroll Now
                  </button>
                  
                  <button 
                    onClick={() => navigate("/courses")}
                    className="w-full border-2 border-[#49BBBD] text-[#49BBBD] font-bold py-3 rounded-lg text-lg hover:bg-[#f0f9ff] transition-colors duration-300"
                  >
                    Browse More Courses
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Duration</span>
                    <span className="font-bold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Lectures</span>
                    <span className="font-bold">{course.lectures}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Level</span>
                    <span className="font-bold">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Certificate</span>
                    <span className="font-bold">{course.certificate ? "Yes" : "No"}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-4 text-[#49BBBD]">This Course Includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fa fa-video text-[#49BBBD] mr-3"></i>
                      <span>{course.lectures} hours on-demand video</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fa fa-file-text text-[#49BBBD] mr-3"></i>
                      <span>{course.assignments} coding exercises</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fa fa-mobile text-[#49BBBD] mr-3"></i>
                      <span>Access on mobile and TV</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fa fa-certificate text-[#49BBBD] mr-3"></i>
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Share Course */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold mb-4 text-[#49BBBD]">Share this course</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#E4405F] text-white p-3 rounded-lg hover:opacity-90 transition-opacity duration-300">
                    <i className="fab fa-instagram"></i> Instagram
                  </button>
                  <button className="flex-1 bg-[#1877F2] text-white p-3 rounded-lg hover:opacity-90 transition-opacity duration-300">
                    <i className="fab fa-facebook"></i> Facebook
                  </button>
                  <button className="flex-1 bg-[#1DA1F2] text-white p-3 rounded-lg hover:opacity-90 transition-opacity duration-300">
                    <i className="fab fa-twitter"></i> Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="bg-[#e6e4e4] p-8 sm:p-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">Related Courses</h1>
          <button 
            onClick={() => navigate("/courses")}
            className="font-bold text-[#49BBBD] cursor-pointer hover:underline"
          >
            See all courses
          </button>
        </div>
        
        {relatedCourses.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-start gap-5 mb-10">
              {getPaginatedRelatedCourses().map((course) => (
                <Card key={course.id} course={course} />
              ))}
            </div>
            
            {/* Pagination for related courses */}
            <Pagination
              currentPage={currentPage}
              totalItems={relatedCourses.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              className="mt-10"
              activeColor="#49BBBD"
              inactiveColor="#f3f2f2"
            />
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600">No related courses found.</p>
            <button 
              onClick={() => navigate("/courses")}
              className="mt-4 bg-[#49BBBD] text-white px-6 py-3 rounded-lg hover:bg-[#3aa9ab] transition-colors duration-300"
            >
              Browse All Courses
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-[#f3f2f2] p-8 sm:p-16">
        <div className="bg-gradient-to-r from-[#49BBBD] to-[#2F327D] rounded-2xl p-8 sm:p-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join {course.students.toLocaleString()} other students who have transformed their careers with this course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate("/enroll/" + course.id)}
              className="bg-white text-[#49BBBD] font-bold px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Enroll Now for {course.newPrice}
            </button>
            <button 
              onClick={() => navigate("/courses")}
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-white/10 transition-colors duration-300"
            >
              Browse More Courses
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CourseDetail;