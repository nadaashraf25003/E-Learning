import { FileText, Calendar, Users } from "lucide-react";

const Home1 = () => {
   const features = [
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      title: "Online Billing, Invoicing, & Contracts",
      desc: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
      color: "bg-indigo-500",
    },
    {
      icon: <Calendar className="w-7 h-7 text-white" />,
      title: "Easy Scheduling & Attendance Tracking",
      desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
      color: "bg-emerald-500",
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: "Customer Tracking",
      desc: "Automate and track emails to individuals or groups. Skiline's built-in system helps organize your organization",
      color: "bg-sky-500",
    },
  ];
  return (
    <>
      <section className="min-h-[600px] bg-white px-4 sm:px-6 lg:px-20 py-16">
        <div className="text-center text-black max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Our Success</h1>
          <p className="text-black mt-4">
            Our success lies in creating an e-learning experience that empowers
            learners everywhere, making knowledge accessible anytime, anywhere,
            and helping every student unlock their full potential for a brighter
            future.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              15K+
            </h2>
            <p className="text-black text-lg mt-2">Students</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              75%
            </h2>
            <p className="text-black text-lg mt-2">Total success</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              35
            </h2>
            <p className="text-black text-lg mt-2">Main questions</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl  md:text-5xl lg:text-6xl  bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              26
            </h2>
            <p className="text-black text-lg mt-2">Chief experts</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              16
            </h2>
            <p className="text-black text-lg mt-2">Years of experience</p>
          </div>
        </div>
        <div className="text-center mt-15 flex justify-center gap-2">
          <h2 className="text-[#2F327D] text-3xl font-bold">All-In-One</h2>
          <h2 className="text-[#00CBB8] text-3xl font-bold">Cloud Software.</h2>
          </div>
          <p className="flex justify-center pt-4  text-center text-black max-w-3xl mx-auto">UpLearn is a cloud-based learning platform that offers a wide range of resources, tools, and services to help learners achieve their educational goals.</p>
           <section className="py-10  mt-10 px-6 lg:px-20 bg-white ">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-8 text-center relative w-[90%] sm:w-[300px] md:w-[320px] lg:w-[350px] hover:scale-105 transition-transform duration-300"
          >
            <div
              className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 ${feature.color} rounded-full flex items-center justify-center shadow-md`}
            >
              {feature.icon}
            </div>

            <h3 className="text-lg font-semibold text-[#2F327D] mt-12">
              {feature.title}
            </h3>
            <p className="text-gray-500 mt-3 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
      </section>
     
    </>
  );
};

export default Home1;
