import { LayoutGrid, StickyNote, Users } from "lucide-react";

const Home3 = () => {
  return (
    <section className="relative min-h-[600px] bg-white px-4 sm:px-6 lg:px-20 py-12 md:py-16 overflow-hidden">
      {/* العنوان */}
      <div className="text-center mt-8 flex flex-col sm:flex-row justify-center items-center gap-2">
        <h2 className="text-[#2F327D] text-2xl sm:text-3xl md:text-4xl font-bold">
          Our
        </h2>
        <h2 className="text-[#00CBB8] text-2xl sm:text-3xl md:text-4xl font-bold">
          Features
        </h2>
      </div>

      <p className="text-center pt-4 text-sm sm:text-base md:text-lg text-[#696984] max-w-3xl mx-auto px-4">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>

      {/* الدواير - هتظهر بس من md */}
      <div className="hidden md:block absolute top-[240px] left-8 w-16 h-16 bg-[#33EFA0] rounded-full" />
      <div className="hidden md:block absolute top-[260px] left-1/5 w-5 h-5 bg-[#33D9EF] rounded-full" />
      <div className="hidden md:block absolute top-[650px] left-1/3 w-5 h-5 bg-[#F56666] rounded-full" />
      <div className="hidden lg:block absolute top-[530px] left-[550px] w-40 h-40 bg-[#5B61EB] rounded-full" />

     
      <div className="mt-12 md:mt-20 flex flex-col lg:flex-row items-center justify-center gap-30">
      
        <div className="relative w-full max-w-md">
         
          <div className="absolute -top-4 left-0 right-0 mx-auto w-full max-w-[3000px] h-7 bg-[#E5E5E5] z-10 rounded-lg flex items-center px-3 gap-2">
            <div className="w-3 h-3 bg-[#EE6767] rounded-full" />
            <div className="w-3 h-3 bg-[#F6C566] rounded-full" />
            <div className="w-3 h-3 bg-[#5BEB7B] rounded-full" />
          </div>

          
          <div className="w-full h-64 sm:h-72 md:h-80 bg-[#F4F4F4]/90 rounded-lg pt-8 flex items-center justify-center">
            <div
              className="relative bg-cover bg-center rounded-2xl w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52"
              style={{ backgroundImage: "url('/home3-1.png')" }}
            />
          </div>
        </div>

       
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-[#2F327D] text-xl sm:text-2xl md:text-3xl font-semibold">
            A <span className="text-[#00CBB8]">user interface</span> designed for
            the classroom
          </p>

          <div className="mt-6 space-y-6 text-[#696984]">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-lg flex-shrink-0">
                <LayoutGrid className="text-[#2F327D]" size={20} />
              </div>
              <p className="text-sm sm:text-base">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-lg flex-shrink-0">
                <StickyNote className="text-[#F6C566]" size={20} />
              </div>
              <p className="text-sm sm:text-base">
                TA’s and presenters can be moved to the front of the class.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-lg flex-shrink-0">
                <Users className="text-[#5B61EB]" size={20} />
              </div>
              <p className="text-sm sm:text-base">
                Teachers can easily see all students and class data at one time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3;
