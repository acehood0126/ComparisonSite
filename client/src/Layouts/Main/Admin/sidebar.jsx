import { IoBusinessOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full h-full border-r-[1px] border-darkblue/10 font-bold bg-transparent">
      <div className="w-full h-full text-[13px] mt-[100px]">
        <Link
          to="/"
          className="flex items-center my-[10px] pl-[30px] w-full border-l-[3px] border-transparent hover:border-darkblue transition ease-linear"
        >
          <IoBusinessOutline className="w-[18px] h-[18px] mr-[10px]" />
          <p>Company</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
