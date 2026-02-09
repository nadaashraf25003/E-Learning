import { useLocation, useNavigate } from "react-router-dom";
import Logo2 from "../../public/UpLearn2.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  
  const isHomePage = location === "/";
  

  const navbarClass = isHomePage ? "navbar-container-home" : "navbar-container-other";
  const titleClass = isHomePage ? "navbar-title-home" : "navbar-title-other";
  const linkClass = isHomePage ? "nav-link-home" : "nav-link-other";
  const loginClass = isHomePage ? "login-btn-home" : "login-btn-other";
  const signupClass = isHomePage ? "signup-btn-home" : "signup-btn-other";

  return (
    <header className={navbarClass}>
      <nav className="navbar">
     
        <div className="navbar-brand">
          <img src={Logo2} alt="UpLearn Logo" className="navbar-logo" />
          <span className={titleClass}>UpLearn</span>
        </div>

        
        <div className="navbar-links">
          <button
            onClick={() => navigate("/")}
            className={`${linkClass} ${location === "/" ? "active" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/Courses")}
            className={`${linkClass} ${location === "/Courses" ? "active" : ""}`}
          >
            Courses
          </button>
          <button
            onClick={() => navigate("/Careers")}
            className={`${linkClass} ${location === "/Careers" ? "active" : ""}`}
          >
            Careers
          </button>
          <button
            onClick={() => navigate("/Blog")}
            className={`${linkClass} ${location === "/Blog" ? "active" : ""}`}
          >
            Blogs
          </button>
          <button
            onClick={() => navigate("/About")}
            className={`${linkClass} ${location === "/About" ? "active" : ""}`}
          >
            About Us
          </button>
        </div>

        
        <div className="navbar-actions">
          <button
            className={loginClass}
            onClick={() => navigate("/Login")}
          >
            Login
          </button>
          <button
            className={signupClass}
            onClick={() => navigate("/Register")}
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;