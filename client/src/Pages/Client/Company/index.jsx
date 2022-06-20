import { Link } from "react-router-dom";

const SelectCompany = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="grid place-items-center">
        <h1 className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink to-purple">
          Comparison Site
        </h1>
        <Link
          to="/admin"
          className="px-[50px] py-[20px] bg-gradient-to-br from-pink to-purple mt-[50px] rounded-full border-[2px] border-transparent text-white font-bold text-[20px] ease-linear duration-300 hover:from-white hover:to-white hover:border-purple hover:text-purple"
        >
          To Admin Page
        </Link>
      </div>
    </div>
  );
};

export default SelectCompany;
