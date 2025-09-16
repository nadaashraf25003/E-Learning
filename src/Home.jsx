// React
import { useNavigate } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Assets
import HomeImg from "./assets/Home.png";
import Home1 from "../homePages/home1";
import Home2 from "../homePages/home2";
import Home3 from "../homePages/home3";
const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <main className="min-h-screen bg-[#49BBBD] overflow-hidden px-4 sm:px-8 lg:px-16 ">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <NavBar />

          <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1  items-center lg:mr-10 gap-15">
            <button className="uplearn-signin-btn hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={()=>navigate("/Login")}>Login</button>

            <button className="uplearn-signup-btn hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={()=>navigate("/Register")}>Sign Up</button>
          </div>
        </div>

        <div className="container mx-auto  pt-10 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 text-white space-y-6 text-center lg:text-left lg:ml-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight opacity-0 animate-fade-in-delay-1 ">
                <span className="text-[#F48C06] "> Studying</span> Online is now
                <br></br> much easier
              </h1>
              <p className="text-xl mb-8 opacity-90 opacity-0 animate-fade-in-delay-1">
                UpLearn is an interesting platform that will teach you in more
                an interactive way.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button className="totc-join-btn hover:scale-105 transition-transform duration-300 cursor-pointer ">Join for free</button>
                <button className="flex items-center gap-3 text-white group hover:scale-105 transition-transform duration-300 cursor-pointer ">
                  <div className="totc-play-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-[#23BDEE] ml-1 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-[#252641] group-hover:underline ">
                    Watch how it works
                  </span>
                </button>
              </div>
              <p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img
                  src={HomeImg}
                  alt="Student learning online"
                  className="w-full max-w-md mx-auto z-10 relative rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Home1/>
      <Home2/>
      <Home3/>
    </>
  );
};

export default Home;
