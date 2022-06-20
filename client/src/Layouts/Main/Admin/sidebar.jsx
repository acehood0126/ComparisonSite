import { MdOutlineDashboard, MdOutlineBusinessCenter } from "react-icons/md";
import { FiBox, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../Assets/Images/logo.png";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full border-r-[1px] border-darkblue/0 font-bold bg-transparent">
      <Link
        to="/"
        className="w-full text-[12px] mt-[30px] ml-[20px] flex items-center"
      >
        <img src={logo} alt="" className="w-[30px] h-[30px] mr-[10px]" />
        <p className="font-extrabold text-[16px]">Comparison Site</p>
      </Link>
      <div className="w-full h-full text-[12px] mt-[30px]">
        <Link
          to="/admin/dashboard"
          className={`flex items-center my-[20px] pl-[40px] w-full border-l-[3px] ${
            location.pathname === "/admin/dashboard"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <MdOutlineDashboard className="w-[18px] h-[18px] mr-[15px]" />
          <p>Dashboard</p>
        </Link>
        <Link
          to="/admin/companies"
          className={`flex items-center my-[20px] pl-[40px] w-full border-l-[3px] ${
            location.pathname === "/admin/companies"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <MdOutlineBusinessCenter className="w-[18px] h-[18px] mr-[15px]" />
          <p>Companies</p>
        </Link>
        <Link
          to="/admin/products"
          className={`flex items-center my-[20px] pl-[40px] w-full border-l-[3px] ${
            location.pathname === "/admin/products"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <FiBox className="w-[18px] h-[18px] mr-[15px]" />
          <p>Products</p>
        </Link>
        <Link
          to="/admin/users"
          className={`flex items-center my-[20px] pl-[40px] w-full border-l-[3px] ${
            location.pathname === "/admin/users"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <FiUsers className="w-[18px] h-[18px] mr-[15px]" />
          <p>Users</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
