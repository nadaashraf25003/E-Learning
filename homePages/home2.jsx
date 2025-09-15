const Home2 = () => {
  return (
    <>
      <section className="min-h-[600px] bg-white px-4 sm:px-6 lg:px-20 py-1">
        <div className="text-center mt-15 flex justify-center gap-2">
          <h1 className="text-[#2F327D] text-4xl font-bold opacity-0 animate-fade-in">
            What is
          </h1>
          <h2 className="text-[#00CBB8] text-4xl font-bold opacity-0 animate-fade-in-delay-1">
            UpLearn?
          </h2>
        </div>
        <p className="text-center text-[#696984] max-w-3xl mx-auto mt-4 opacity-0 animate-fade-in-delay-2 text-lg">
          UpLearn is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
          <div
            className=" relative bg-cover bg-center rounded-2xl shadow-lg w-full max-w-sm h-[300px] flex items-center justify-center text-center transition-transform opacity-0 animate-fade-in-delay-4 "
            style={{ backgroundImage: "url('/home2-1.png')" }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-4 px-6">
              <h3 className="text-white text-2xl ">FOR INSTRUCTORS</h3>
              <button className="bg-white/10 border text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform ">
                Start a class today
              </button>
            </div>
          </div>

         
          <div
            className="group relative bg-cover bg-center rounded-2xl shadow-lg w-full max-w-sm h-[300px] flex items-center justify-center text-center transition-transform opacity-0 animate-fade-in-delay-4 "
            style={{ backgroundImage: "url('/home2-2.png')" }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-4 px-6">
              <h3 className="text-white text-2xl">FOR STUDENTS</h3>
              <button className="bg-[#23BDEE]  text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2;
