import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

const SelectCompany = () => {
  return (
    <div className="grid place-items-center h-screen bg-specialwhite">
      <div className="grid place-items-center">
        <img src={logo} alt="" className="w-[300px] h-[300px]" />
        <h1 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink to-purple mt-[20px]">
          Comparison Site
        </h1>
        <Link
          to="/admin"
          className="px-[50px] py-[15px] bg-gradient-to-br from-pink to-purple mt-[30px] rounded-full border-[2px] border-transparent text-specialwhite font-bold text-[15px] ease-linear duration-300 hover:from-white hover:to-white hover:border-purple hover:text-purple"
        >
          To Admin Page
        </Link>
      </div>
    </div>
  );
};

export default SelectCompany;
