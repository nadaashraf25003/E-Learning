import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    
    <section className="min-h-screen bg-white">
      
      <NavBar />
      
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-12 mt-12 bg-[#9DCCFF]/30 rounded-md">
        
        <div className="w-full lg:w-1/2 space-y-4 mb-8 lg:mb-0">
          <p className="text-black font-semibold text-lg md:text-xl">
            By Themadbrains in{" "}
            <span className="text-[#49BBBD]">inspiration</span>
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F327D] max-w-xl leading-snug">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h2>
          <p className="text-[#696984] text-base md:text-lg lg:text-xl max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <button className="bg-teal-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-full hover:bg-teal-600 hover:scale-105 transition">
            Start learning now
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/Blog.png"
            alt="blog"
            className="rounded-lg w-3/4 md:w-2/3 lg:w-full object-contain"
          />
        </div>
      </div>

      <section className="container mx-auto max-w-screen-xl py-10 px-6 lg:px-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
          Reading blog list
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl overflow-hidden hover:scale-105 transition bg-white flex items-center justify-center">
            <img
              src="/UI.png"
              alt="UX/UI"
              className="w-full h-48 md:h-64 object-contain"
            />
          </div>

          <div className="rounded-xl overflow-hidden hover:scale-105 transition bg-white flex items-center justify-center">
            <img
              src="/React.png"
              alt="React"
              className="w-full h-48 md:h-64 object-contain"
            />
          </div>

          <div className="rounded-xl overflow-hidden hover:scale-105 transition bg-white flex items-center justify-center">
            <img
              src="/PHP.png"
              alt="PHP"
              className="w-full h-48 md:h-64 object-contain"
            />
          </div>

          <div className="rounded-xl overflow-hidden hover:scale-105 transition bg-white flex items-center justify-center">
            <img
              src="/JS.png"
              alt="JavaScript"
              className="w-full h-48 md:h-64 object-contain"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#9DCCFF]/30 py-12">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Related Blog</h2>
            <h2 className="text-lg font-semibold text-[#49BBBD] cursor-pointer hover:underline hover:text-[#2F327D] hover:scale-105">
              See all
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:scale-105 transition">
              <img src="/home2-1.png" alt="Professional woman" className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Clas adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </h3>
                <div className="flex items-center mb-3">
               
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Clas, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/BlogDetail" className="text-[#49BBBD] text-sm cursor-pointer hover:underline">Read more</Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    291,232
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:scale-105 transition">
              <img src="/Blog2.png" alt="Laptop with video call" className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Clas adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </h3>
                <div className="flex items-center mb-3">
               
                  
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Clas, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/BlogDetail" className="text-[#49BBBD] text-sm cursor-pointer hover:underline">Read more</Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    291,232
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Marketing Articles</h2>
            <h2 className="text-lg font-semibold text-[#49BBBD] cursor-pointer hover:underline hover:text-[#2F327D] hover:scale-105">
              See all
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="/blog3.png" alt="AWS Certified solutions" className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Design</span>
                  <span className="text-xs text-gray-500">1 Month</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">AWS Certified solutions Architect</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Lina</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 line-through">$100</span>
                    <span className="text-sm font-bold text-[#49BBBD] ml-1">$80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="Blog2.png" alt="AWS Certified solutions" className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Design</span>
                  <span className="text-xs text-gray-500">1 Month</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">AWS Certified solutions Architect</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Lina</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 line-through">$100</span>
                    <span className="text-sm font-bold text-[#49BBBD] ml-1">$80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="/blog4.png  " alt="AWS Certified solutions" className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Design</span>
                  <span className="text-xs text-gray-500">1 Month</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">AWS Certified solutions Architect</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Lina</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 line-through">$100</span>
                    <span className="text-sm font-bold text-[#49BBBD] ml-1">$80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="/blog5.png" alt="AWS Certified solutions" className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Design</span>
                  <span className="text-xs text-gray-500">1 Month</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">AWS Certified solutions Architect</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Lina</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 line-through">$100</span>
                    <span className="text-sm font-bold text-[#49BBBD] ml-1">$80</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
  );
};

export default Blog;
