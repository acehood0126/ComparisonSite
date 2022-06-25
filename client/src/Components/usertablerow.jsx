// import { useState } from "react";
import { Checkbox } from "flowbite-react";

const UserTableRow = ({ data }) => {
  const { name, email } = data;
  // const [checked, SetChecked] = useState(false);

  return (
    <div className="w-full h-[50px] mt-[15px] transition ease-linear bg-specialwhite drop-shadow-threeDboxOuterMiddle hover:drop-shadow-threeDboxOuter rounded-[20px] lg:px-[20px] px-[10px] lg:text-[13x] text-[12px] flex items-center">
      <div className="w-full h-full grid grid-cols-[30px_auto] place-items-center">
        <Checkbox />
        <div className="w-full h-full grid grid-cols-5 place-items-center">
          <div>{name}</div>
          <div>{email}</div>
          <div>Administrator</div>
          <button className="px-[10px] py-[5px] transition ease-linear bg-green-500 border-[1px] border-green-500 hover:bg-specialwhite hover:text-green-500 rounded-full text-white text-[12px]">
            Reset Password
          </button>
          <button className="px-[10px] py-[5px] transition ease-linear bg-red-500 border-[1px] border-red-500 hover:bg-specialwhite hover:text-red-500 rounded-full text-white text-[12px]">
            Remove User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTableRow;
