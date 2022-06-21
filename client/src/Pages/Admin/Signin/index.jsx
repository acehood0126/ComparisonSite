import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import ScaleLoader from "react-spinners/ScaleLoader";

import api from "../../../Utils/api";

const SignIn = () => {
  const [waiting, setWaiting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full h-screen bg-specialwhite flex justify-center items-center relative">
      <div className="md:w-[1000px] md:h-[600px] bg-specialwhite drop-shadow-threeDboxOuter rounded-[20px] grid md:grid-cols-7 grid-cols-1 overflow-hidden">
        <div className="md:col-span-3 hidden bg-specialwhite drop-shadow-threeDboxOuterMiddle md:flex justify-center items-center overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-specialwhite shadow-threeDTopCircleInner rounded-full mt-[-700px] ml-[400px]"></div>
          <div className="absolute w-[400px] h-[400px] bg-specialwhite shadow-threeDBottomCircleInner rounded-full mt-[800px] ml-[-400px]"></div>
          <div className="px-[50px] w-full">
            <Link to="/" className="w-full flex justify-center">
              <img src={logo} alt="" className="w-[200px] h-[200px]" />
            </Link>
            <h1 className="text-[35px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink to-purple mt-[20px]">
              Comparison Site
            </h1>
            <h1 className="font-extrabold text-[25px] text-center text-black">
              Admin page
            </h1>
            <p className="text-center text-gray text-[14px] mt-[10px]">
              Only registered people can sign in to admin page and manage the
              site
            </p>
            {/* <div className="mt-[50px] flex justify-center">
              <Link to="/admin/signup">
                <button className="bg-purple drop-shadow-lg transition ease-linear hover:drop-shadow-none hover:scale-[0.98] rounded-full px-[30px] py-[10px] text-white font-semibold">
                  Sign Up
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="md:col-span-4 drop-shadow-threeDboxmiddle flex justify-center items-center">
          <div className="w-full lg:px-[50px] px-[30px] max-w-[450px] py-[30px]">
            <Link
              to="/"
              className="md:hidden w-full flex justify-center mb-[20px]"
            >
              <img src={logo} alt="" className="w-[150px] h-[150px]" />
            </Link>

            <h1 className="font-extrabold text-[30px] text-center text-black">
              Sign In
            </h1>
            <p className="text-center text-gray text-[14px] md:mt-[20px]">
              Sign in with your personal info
            </p>
            <input
              disabled={waiting}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                waiting ? "shadow-none" : "shadow-threeDboxInner"
              } transition ease-linear w-full px-[20px] py-[10px] rounded-[10px] mt-[10px] bg-specialwhite text-[14px] focus:outline-none`}
            />
            <input
              disabled={waiting}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className={`${
                waiting ? "shadow-none" : "shadow-threeDboxInner"
              } transition ease-linear w-full px-[20px] py-[10px] rounded-[10px] mt-[10px] bg-specialwhite text-[14px] focus:outline-none`}
            />
            <div className="mt-[50px] flex justify-center">
              {/* <Link to="/admin/dashboard"> */}
              <button
                disabled={waiting}
                onClick={() => {
                  setWaiting(!waiting);
                  console.log(email);
                  console.log(password);
                }}
                className={`${
                  waiting
                    ? "bg-gray scale-[0.96] cursor-wait"
                    : "bg-purple drop-shadow-lg"
                } transition ease-linear hover:drop-shadow-none hover:scale-[0.96] rounded-full px-[30px] py-[10px] w-[160px] h-[40px] text-white font-semibold flex items-center justify-center`}
              >
                {/* Sign In */}
                {waiting ? (
                  <ScaleLoader color="#fff" height="15px" />
                ) : (
                  "Sign In"
                )}
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
