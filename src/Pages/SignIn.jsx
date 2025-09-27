// React
import { useNavigate } from "react-router-dom";

//Assets
import login from "../../public/Logo.png";
function SignIn() {
  const navigate = useNavigate();
  const sumbit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    let logUser = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    let storedUsers = JSON.parse(localStorage.getItem("Users"));
    if (
      storedUsers.some(
        (user) =>
          user.email === logUser.email && user.password === logUser.password
      )
    ) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid email or password");
      window.location.reload();
    }
  };
  return (
    <>
      <div className="grid grid-cols-2  mx-[10%] bg-white  max-md:grid-cols-1  justify-center items-center h-screen shadow-2xl">
        <div className="right max-md:hidden ">
          <img src={login} alt="logo" className="rounded-lg" />
        </div>
        <div className="left">
          <div className="SignIn  flex flex-col justify-center max-lg:p-10  p-16 rounded-lg text-center">
            <p className="pb-10 text-3xl font-bold text-black">
              Welcome to our Learning Website
            </p>
            <div className="bg-[#49BBBD99] p-3 rounded-[150px] mb-8 w-80 flex justify-center gap-8 mx-auto max-lg:gap-2">
              <button
                type="button"
                onClick={() => navigate("/Login")}
                className="bg-[#49BBBD] py-2 px-10 rounded-[150px] font-bold text-white 
                    hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => navigate("/Register")}
                className=" py-2 px-10 rounded-[150px] font-bold text-white 
                    hover:scale-105 transition-all duration-300  cursor-pointer"
              >
                Register
              </button>
            </div>
            <form
              onSubmit={sumbit}
              className="flex flex-col gap-4 w-full text-black"
            >
              <label className="text-left text-black text-md ">
                Email Address <br />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-[1px]   border-[#49BBBD] rounded-full p-2 pl-8 my-3"
                  placeholder="Enter your email..."
                />
              </label>

              <label className="text-left text-black text-md ">
                Password <br />
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full border-[1px]   border-[#49BBBD] rounded-full p-2 pl-8 my-3"
                  placeholder="Enter your password..."
                />
              </label>
              <div className="flex justify-between text-black text-sm">
                <label>
                  <input type="checkbox" className="mr-2 cursor-pointer"/>
                  Remember me
                </label>
                <p>Forget Password ?</p>
              </div>
              <br />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#49BBBD] py-2 px-10 rounded-[150px] font-bold text-white w-1/2 float-right 
                    hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
