import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      {/* Main Content */}
      <div className="bg-[#f3f2f2] min-h-[60vh] flex items-center justify-center py-16 px-4 sm:px-8 lg:px-36">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-16 text-center max-w-3xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8 relative">
            <div className="text-[8rem] md:text-[12rem] font-bold text-[#49BBBD] opacity-20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Animated elements */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <svg
                    className="w-16 h-16 text-[#49BBBD]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse">
                  <svg
                    className="w-12 h-12 text-[#2F327D] opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4">
            Looks like you're lost
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 bg-[#49BBBD] text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#3aa9ab] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Go to Homepage
            </button>

            <button
              onClick={() => navigate("/courses")}
              className="flex items-center justify-center gap-2 border-2 border-[#49BBBD] text-[#49BBBD] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f0f9ff] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 11-6-11-6zM1 18l11 6 11-6M1 13l11 6 11-6" />
              </svg>
              Browse Courses
            </button>
          </div>
          {/* Help Section */}
          <div className="mt-8 p-6 bg-[#f8f9fa] rounded-lg">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5 text-[#49BBBD]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
              </svg>
              <span>Need help? Contact our</span>
              <button
                onClick={() => navigate("/support")}
                className="text-[#49BBBD] font-bold hover:underline"
              >
                support team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
