const NavBar = () => {
    return ( 
        <>
            <header className="totc-header ">
      <nav className="totc-nav">
        <div className="flex items-center space-x-2">
          <div >
            <span className="uplearn-text">UpLearn</span>
          </div>
        </div>

        <div className="totc-nav-links">
          <a href="#" className="totc-nav-link">
            Home
          </a>
          <a href="#" className="totc-nav-link">
            Courses
          </a>
          <a href="#" className="totc-nav-link">
            Careers
          </a>
          <a href="#" className="totc-nav-link">
            Blog
          </a>
          <a href="#" className="totc-nav-link">
            About Us
          </a>
        </div>
      </nav>
    </header>
        </>
     );
}
 
export default NavBar;