import { useLocation, useNavigate } from "react-router-dom";
import Logo2 from "../../public/UpLearn2.png";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = location === "/";

  const navbarClass = isHomePage 
    ? "bg-transparent" 
    : "bg-white shadow-sm";
  
  const titleClass = isHomePage 
    ? "text-white" 
    : "text-[#2F327D]";
  
  const linkClass = isHomePage 
    ? "text-white hover:text-gray-200" 
    : "text-gray-700 hover:text-[#49BBBD]";
  
  const mobileLinkClass = isHomePage
    ? "text-white hover:bg-white/10"
    : "text-gray-700 hover:bg-gray-100";
  
  const activeLinkClass = isHomePage
    ? "text-white font-semibold"
    : "text-[#49BBBD] font-semibold";
  
  const loginClass = isHomePage 
    ? "text-white hover:bg-white/10 border-white" 
    : "text-[#49BBBD] hover:bg-[#49BBBD]/10 border-[#49BBBD]";
  
  const signupClass = isHomePage 
    ? "bg-white text-[#49BBBD] hover:bg-gray-100" 
    : "bg-[#49BBBD] text-white hover:bg-[#3aa9ab]";

  // Close mobile menu when navigating
  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full ${navbarClass} transition-all duration-300`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div 
              className="navbar-brand flex items-center cursor-pointer"
              onClick={() => handleNavigate("/")}
            >
              <img 
                src={Logo2} 
                alt="UpLearn Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
              />
              <span className={`ml-2 lg:ml-3 text-xl lg:text-2xl font-bold ${titleClass}`}>
                UpLearn
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => navigate("/")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${linkClass} ${location === "/" ? activeLinkClass : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("/Courses")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${linkClass} ${location === "/Courses" ? activeLinkClass : ""}`}
            >
              Courses
            </button>
            <button
              onClick={() => navigate("/Careers")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${linkClass} ${location === "/Careers" ? activeLinkClass : ""}`}
            >
              Careers
            </button>
            <button
              onClick={() => navigate("/Blog")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${linkClass} ${location === "/Blog" ? activeLinkClass : ""}`}
            >
              Blogs
            </button>
            <button
              onClick={() => navigate("/About")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${linkClass} ${location === "/About" ? activeLinkClass : ""}`}
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/LiteratureCourse")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${linkClass} ${location === "/LiteratureCourse" ? activeLinkClass : ""}`}
            >
                Literature Courses
            </button>
          </div>

          {/* Desktop Auth Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${loginClass}`}
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${signupClass}`}
              onClick={() => navigate("/Register")}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isHomePage 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:bg-gray-100'
              } focus:outline-none`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // X Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Show/hide based on menu state */}
        {isMenuOpen && (
          <div className={`lg:hidden ${isHomePage ? 'bg-[#208283]' : 'bg-white'} rounded-lg mt-2 shadow-lg`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavigate("/")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass} ${location === "/" ? activeLinkClass : ""}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate("/Courses")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass} ${location === "/Courses" ? activeLinkClass : ""}`}
              >
                Courses
              </button>
              <button
                onClick={() => handleNavigate("/Careers")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass} ${location === "/Careers" ? activeLinkClass : ""}`}
              >
                Careers
              </button>
              <button
                onClick={() => handleNavigate("/Blog")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass} ${location === "/Blog" ? activeLinkClass : ""}`}
              >
                Blogs
              </button>
              <button
                onClick={() => handleNavigate("/About")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass} ${location === "/About" ? activeLinkClass : ""}`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate("/LiteratureCourse")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass} ${location === "/LiteratureCourse" ? activeLinkClass : ""}`}
              >
                Literature Courses
              </button>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 pb-2 border-t border-gray-200">
                <button
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium mb-2 ${mobileLinkClass}`}
                  onClick={() => handleNavigate("/Login")}
                >
                  Login
                </button>
                <button
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${signupClass}`}
                  onClick={() => handleNavigate("/Register")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;