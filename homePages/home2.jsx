const Home2 = () => {
  return (
    <>
      <section className="relative min-h-[600px] bg-white px-4 sm:px-6 lg:px-8 xl:px-20 py-1 overflow-hidden">
        
        <div className="text-center mt-8 md:mt-15 flex flex-col sm:flex-row justify-center items-center gap-2">
          <h1 className="text-[#2F327D] text-3xl sm:text-4xl font-bold opacity-0 animate-fade-in">
            What is
          </h1>
          <h2 className="text-[#00CBB8] text-3xl sm:text-4xl font-bold opacity-0 animate-fade-in-delay-1">
            UpLearn?
          </h2>
        </div>
        
        
        <p className="text-center text-[#696984] max-w-3xl mx-auto mt-4 opacity-0 animate-fade-in-delay-2 text-base sm:text-lg px-4">
          UpLearn is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place
        </p>
        
       
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8 mt-8 md:mt-12 px-4">
          <div
            className="relative bg-cover bg-center rounded-2xl shadow-lg w-full max-w-md mx-auto md:mx-0 h-[250px] sm:h-[300px] flex items-center justify-center text-center transition-transform opacity-0 animate-fade-in-delay-4"
            style={{ backgroundImage: "url('/home2-1.png')" }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6">
              <h3 className="text-white text-xl sm:text-2xl">FOR INSTRUCTORS</h3>
              <button className="bg-white/10 border text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform text-sm sm:text-base">
                Start a class today
              </button>
            </div>
          </div>

          <div
            className="group relative bg-cover bg-center rounded-2xl shadow-lg w-full max-w-md mx-auto md:mx-0 h-[250px] sm:h-[300px] flex items-center justify-center text-center transition-transform opacity-0 animate-fade-in-delay-4"
            style={{ backgroundImage: "url('/home2-2.png')" }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6">
              <h3 className="text-white text-xl sm:text-2xl">FOR STUDENTS</h3>
              <button className="bg-[#23BDEE] text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform text-sm sm:text-base">
                Enter access code
              </button>
            </div>
          </div>
        </div>
        
       
        <div className="absolute bottom-1/4 right-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cyan-500/40 rounded-full hidden sm:block" />
        <div className="absolute top-[650px] left-1/8 w-6 h-6 sm:w-8 sm:h-8 bg-green-600/50 rounded-full hidden sm:block" />
        
        
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 px-4 md:px-8">
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-[#2F327D] text-2xl sm:text-3xl font-semibold">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#00CBB8]">you can do with UpLearn.</span>
            </p>
            <p className="text-[#696984] text-base sm:text-lg mt-10">
              UpLearn's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
            </p>
          </div>
          
          <div 
            className="relative bg-cover bg-center rounded-2xl shadow-lg w-full max-w-md h-[250px] sm:h-[290px] flex items-center justify-center text-center transition-transform"
            style={{ backgroundImage: "url('/home2-3.png')" }}
          />
        </div>
      </section>
    </>
  );
};

export default Home2;