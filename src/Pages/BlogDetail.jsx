import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
const BlogDetail = () => {
  return (
    <section className="min-h-screen bg-white">
      <NavBar />
      <img src="/blogDetail.png" className="w-full h-120"></img>
      <div>
        <p className="text-[#2F327D] font-bold text-3xl p-10 ">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </p>
        <div className="px-20">
          <p className="text-[#696984]  text-lg  max-w-6xl ">
            UpLearn is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <p className="text-[#696984] text-lg  pt-7 max-w-6xl ">
            UpLearn is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place. UpLearn is a
            platform that allows educators to create online classes whereby they
            can store the course materials online; manage assignments, quizzes
            and exams; monitor due dates; grade results and provide students
            with feedback all in one place.
          </p>
          <p className="text-[#696984] text-lg  pt-7 max-w-6xl ">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place. TOTC is a platform
            that allows educators to create online classes whereby they can
            store the course materials online; manage
          </p>
          <p className="flex flex-row gap-5">
            <div className="w-30 h-10 bg-[#49BBBD]/30 flex items-center justify-center rounded-full  text-black/60 mt-10">
              affordable
            </div>
            <div className="w-30 h-10 bg-[#49BBBD]/30 flex items-center justify-center rounded-full  text-black/60 mt-10">
              stunning
            </div>
            <div className="w-30 h-10 bg-[#49BBBD]/30 flex items-center justify-center rounded-full  text-black/60 mt-10">
              making
            </div>
            <div className="w-30 h-10 bg-[#49BBBD]/30 flex items-center justify-center rounded-full  text-black/60 mt-10">
              madbrawns
            </div>
          </p>
          <hr class="border-t-2 border-gray-300 my-4" />
          <div className="flex flex-row items-center justify-between mt-5">
            <div className="flex flex-row items-center">
              <img src="/lina.png" className="w-15 h-15" />

              <div className="flex flex-col pl-5">
                <h1 className="text-[#696984] text-md">Written by</h1>
                <h1 className="text-black text-lg font-semibold">Lina</h1>
              </div>
            </div>

            <div className="w-50 h-10 border border-[#49BBBD] rounded-full cursor-pointer hover:bg-[#49BBBD] hover:text-white hover:scale-105 transition flex items-center justify-center text-black/60">
              follow
            </div>
          </div>
        </div>
        <section className="bg-[#9DCCFF]/30 py-12 mt-10">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Related Blog</h2>
            <h2 className="text-lg font-semibold text-[#49BBBD] cursor-pointer hover:underline hover:text-[#2F327D] hover:scale-105">
              See all
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mb-16 ">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:scale-105 transition">
              <img src="/home2-1.png" alt="Professional woman" className="w-full  h-60 object-cover" />
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

            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:scale-105 h-120 transition">
              <img src="/Blog2.png" alt="Laptop with video call" className="  w-full h-60 object-cover" />
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
      </div>
      <Footer/>
    </section>
  );
};

export default BlogDetail;
