export default function Footer() {
  return (
    <footer className="bg-[#252641] text-white py-10  px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        
        <div className="flex items-center pb-4 gap-2">
          <div className="border border-teal-400 px-2 py-1 rounded">
            <span className="text-white font-bold">UpLearn</span>
          </div>
          <span className="text-gray-300">Virtual Class for Zoom</span>
        </div>

       
        <div className="text-center">
          <p className="text-[#B2B3CF] mb-3 font-semibold text-lg">Subscribe to get our Newsletter</p>
          <div className="flex pb-7">
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-full px-4 py-2 w-64 outline-none border text-[#83839A] mr-3"
            />
            <button className="rounded-full bg-teal-400 text-white px-6 pt-2 pb-3  hover:bg-teal-500 hover:scale-105 transition-transform duration-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        
        <div className="flex gap-6 text-[#B2B3CF] text-sm">
          <a href="#" className="hover:text-teal-400">Careers</a>
          <a href="#" className="hover:text-teal-400">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400">Terms & Conditions</a>
        </div>

        
        <p className="text-[#B2B3CF] text-sm mb-2">
          © 2025 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
}