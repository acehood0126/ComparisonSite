import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

const SignIn = () => {
  return (
    <div className="w-full h-screen bg-specialwhite flex justify-center items-center relative">
      <div className="w-[1000px] h-[600px] bg-specialwhite drop-shadow-threeDboxOuter rounded-[20px] grid grid-cols-7 overflow-hidden">
        <div className="col-span-3 bg-specialwhite drop-shadow-threeDboxOuterMiddle flex justify-center items-center overflow-hidden">
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
        <div className="col-span-4 drop-shadow-threeDboxmiddle flex justify-center items-center">
          <div className="w-full px-[50px] max-w-[450px]">
            <h1 className="font-extrabold text-[30px] text-center text-black">
              Sign In
            </h1>
            <p className="text-center text-gray text-[14px] mt-[20px]">
              Sign in with your personal info
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-[20px] py-[10px] rounded-[10px] mt-[10px] bg-specialwhite shadow-threeDboxInner text-[14px] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-[20px] py-[10px] rounded-[10px] mt-[10px] bg-specialwhite shadow-threeDboxInner text-[14px] focus:outline-none"
            />
            <div className="mt-[50px] flex justify-center">
              <Link to="/admin/dashboard">
                <button className="bg-purple drop-shadow-lg transition ease-linear hover:drop-shadow-none hover:scale-[0.96] rounded-full px-[30px] py-[10px] text-white font-semibold">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
