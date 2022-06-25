// import { useState } from "react";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import { Checkbox } from "flowbite-react";

const UserTableHeader = () => {
  // const [checked, SetChecked] = useState(false);
  const [sortby, setSortBy] = useState(0);
  const [sortorder, setSortOrder] = useState(false);

  const handleClick = (idx) => {
    if (sortby === idx) {
      setSortOrder(!sortorder);
    } else {
      setSortBy(idx);
      setSortOrder(false);
    }
  };

  return (
    <div className="w-full h-[40px] transition ease-linear bg-specialwhite drop-shadow-threeDboxOuterMiddle rounded-[20px] lg:px-[20px] px-[10px] lg:text-[14px] text-[12px] flex items-center">
      <div className="w-full h-full grid grid-cols-[30px_auto] place-items-center">
        <Checkbox />
        <div className="w-full h-full grid grid-cols-5 place-items-center font-bold">
          <button
            onClick={() => handleClick(1)}
            className="text-center flex items-center"
          >
            Name
            <div className="ml-[3px]">
              <BsFillCaretUpFill
                className={`mb-[-2px] w-[10px] h-[10px] ${
                  sortby === 1 && sortorder === true ? "" : "opacity-20"
                }`}
              />
              <BsFillCaretDownFill
                className={`w-[10px] h-[10px] ${
                  sortby === 1 && sortorder === false ? "" : "opacity-20"
                }`}
              />
            </div>
          </button>
          <button
            onClick={() => handleClick(2)}
            className="text-center flex items-center"
          >
            Email
            <div className="ml-[3px]">
              <BsFillCaretUpFill
                className={`mb-[-2px] w-[10px] h-[10px] ${
                  sortby === 2 && sortorder === true ? "" : "opacity-20"
                }`}
              />
              <BsFillCaretDownFill
                className={`w-[10px] h-[10px] ${
                  sortby === 2 && sortorder === false ? "" : "opacity-20"
                }`}
              />
            </div>
          </button>
          <button
            onClick={() => handleClick(3)}
            className="text-center flex items-center"
          >
            Permission
            <div className="ml-[3px]">
              <BsFillCaretUpFill
                className={`mb-[-2px] w-[10px] h-[10px] ${
                  sortby === 3 && sortorder === true ? "" : "opacity-20"
                }`}
              />
              <BsFillCaretDownFill
                className={`w-[10px] h-[10px] ${
                  sortby === 3 && sortorder === false ? "" : "opacity-20"
                }`}
              />
            </div>
          </button>
          <div className="text-center flex items-center">Reset Password</div>
          <div className="text-center flex items-center">Remove User</div>
        </div>
      </div>
    </div>
  );
};

export default UserTableHeader;
