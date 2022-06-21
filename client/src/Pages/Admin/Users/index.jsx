import { FiUserPlus } from "react-icons/fi";

const Users = () => {
  return (
    <div className="w-full p-[30px]">
      <div className="flex justify-end">
        <button
          to="/admin"
          className="px-[20px] py-[7px] bg-gradient-to-br from-pink to-purple rounded-full border-[1px] border-purple/0 text-specialwhite font-bold text-[13px] ease-linear duration-300 hover:from-specialwhite hover:to-specialwhite hover:border-purple hover:text-purple flex items-center"
        >
          <FiUserPlus className="mr-[5px] w-[18px] h-[18px]" />
          New User
        </button>
      </div>
    </div>
  );
};

export default Users;
