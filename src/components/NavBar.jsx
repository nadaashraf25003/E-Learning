import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo2 from "../assets/UpLearn2.png";
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  console.log(location);
  return (
    <>
      <header className="totc-header ">
        <nav className="totc-nav">
          <div className="flex items-center space-x-2">
            <div>
              <img src={Logo2} alt="" width={70} />
              {/* <span className="uplearn-text">UpLearn</span> */}
            </div>
          </div>

          <div className="totc-nav-links">
            <button
              onClick={() => navigate("/")}
              className="totc-nav-link cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/Courses")}
              className="totc-nav-link cursor-pointer"
            >
              Courses
            </button>
            <button
              onClick={() => navigate("/Courses")}
              className="totc-nav-link cursor-pointer"
            >
              Careers
            </button>
            <button
              onClick={() => navigate("/Courses")}
              className="totc-nav-link cursor-pointer"
            >
              Blog
            </button>
            {location === "/Courses" ? (
              <button
                onClick={() => navigate("/Search")}
                className="totc-nav-link cursor-pointer"
              >
                Search
              </button>
            ) : (
              <button
                onClick={() => navigate("/Courses")}
                className="totc-nav-link cursor-pointer"
              >
                About Us
              </button>
            )}
          </div>
          <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1  items-center lg:mr-10 gap-15">
            <button
              className="uplearn-signin-btn hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>

            <button
              className="uplearn-signup-btn hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate("/Register")}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
