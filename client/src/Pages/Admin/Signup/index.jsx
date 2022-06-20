import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full h-screen bg-specialwhite flex justify-center items-center relative">
      <div className="w-[1000px] h-[600px] bg-specialwhite drop-shadow-threeDboxOuter rounded-[20px] grid grid-cols-7 overflow-hidden">
        <div className="col-span-3 bg-specialwhite drop-shadow-threeDboxOuterMiddle flex justify-center items-center">
          <div className="px-[50px]">
            <h1 className="font-bold text-[30px] text-center">Welcome!</h1>
            <p className="text-center text-gray text-[15px] mt-[20px]">
              To manage database of companies and
              <br /> products please <span className="font-bold">
                sign in
              </span>{" "}
              with
              <br /> your personal info
            </p>
            <div className="mt-[50px] flex justify-center">
              <Link to="/admin/signin">
                <button className="bg-purple drop-shadow-lg transition ease-linear hover:drop-shadow-none hover:scale-[0.98] rounded-full px-[30px] py-[10px] text-white font-semibold">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 drop-shadow-threeDboxmiddle flex justify-center items-center">
          <div className="w-full px-[50px] max-w-[450px]">
            <h1 className="font-bold text-[30px] text-center">
              Create Account
            </h1>
            <p className="text-center text-gray text-[15px] mt-[20px]">
              Sign up with your personal info
            </p>
            <input
              placeholder="Name"
              className="w-full px-[20px] py-[10px] rounded-[10px] mt-[15px] bg-specialwhite shadow-threeDboxInner text-[14px] focus:outline-none"
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-[20px] py-[10px] rounded-[10px] mt-[10px] bg-specialwhite shadow-threeDboxInner text-[14px] focus:outline-none"
            />
            <div className="mt-[30px] flex justify-center">
              <Link to="/admin/dashboard">
                <button className="bg-purple drop-shadow-lg transition ease-linear hover:drop-shadow-none hover:scale-[0.98] rounded-full px-[30px] py-[10px] text-white font-semibold">
                  Sign Up
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
