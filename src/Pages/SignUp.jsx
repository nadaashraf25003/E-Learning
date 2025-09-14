// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


// Assets
import login from "../assets/Logo.png";

function SignUp() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  // Yup schema
  const userSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .matches(
        /^[A-Za-z\s]+$/,
        "Name should not contain numbers or special characters"
      ),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(18, "Password must be at most 18 characters"),
  });

  const submit = async (e) => {
    e.preventDefault();
    const newUser = {
      email: e.target[0].value,
      name: e.target[1].value,
      password: e.target[2].value,
    };
    try {
      // Validate with Yup
      await userSchema.validate(newUser, { abortEarly: false });

      // Clear errors if valid
      setErrors({});

      // Save to localStorage
      let storedUsers = JSON.parse(localStorage.getItem("Users"));
      if (!Array.isArray(storedUsers)) storedUsers = [];
      console.log("User registered:", newUser);
      if (storedUsers.some((user) => user.email === newUser.email)) {
        setErrors({ email: "Email is already registered" });
        return;
      }
      storedUsers.push(newUser);
      localStorage.setItem("Users", JSON.stringify(storedUsers));
      navigate("/Login");
    } catch (validationError) {
      //  errors
      const newErrors = {};
      validationError.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2  mx-[10%] bg-white  max-md:grid-cols-1  justify-center items-center h-screen">
        <div className="right max-md:hidden " >
          <img src={login} alt="logo" className="rounded-lg" />
        </div>
        <div className="left">
          <div className="SignIn  flex flex-col justify-center max-lg:p-10  p-16 rounded-lg text-center">
            <p className="pb-10 text-3xl font-bold text-black">Welcome to our Learning Website</p>
            <div className="bg-[#49BBBD99] p-3 rounded-[150px] mb-8 w-80 flex justify-center gap-8 mx-auto max-lg:gap-2 max-sm:flex-col max-sm:rounded-[10px]">
              <button type="button" onClick={() => navigate("/Login")} className=" py-2 px-10 rounded-[150px] font-bold text-white 
               hover:scale-105 transition-all duration-300 cursor-pointer">
                Login
              </button>
              <button type="button" onClick={() => navigate("/Register")} className="bg-[#49BBBD] py-2 px-10 rounded-[150px] font-bold text-white 
               hover:scale-105 transition-all duration-300  cursor-pointer">
                Register
              </button>
            </div>
            <form onSubmit={submit} className="flex flex-col gap-4 w-full text-black">
              <label className="text-left text-black text-md ">
                Email Address <br />
                <input type="email" name="email" required className="w-full border-[1px]   border-[#49BBBD] rounded-full p-2 pl-8 my-3" placeholder="Enter your email..."/>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </label>
              <label className="text-left text-black text-md ">
                User Name <br />
                <input type="text" name="name" required className="w-full border-[1px]   border-[#49BBBD] rounded-full p-2 pl-8 my-3" placeholder="Enter your name..."/>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </label>
              <label className="text-left text-black text-md ">
                Password <br />
                <input type="password" name="password" required className="w-full border-[1px]   border-[#49BBBD] rounded-full p-2 pl-8 my-3" placeholder="Enter your password..."/>
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </label>
              <br />
              <div className="flex justify-end"><button type="submit" className="bg-[#49BBBD] py-2 px-10 rounded-[150px] font-bold text-white w-1/2 float-right 
               hover:scale-105 transition-all duration-300 cursor-pointer">Register</button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
