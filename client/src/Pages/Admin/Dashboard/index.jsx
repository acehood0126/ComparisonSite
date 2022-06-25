import avatar from "../../../Assets/Images/avatars/avatar1.jpg";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";

const AdminDashboard = () => {
  return (
    <div className="w-full p-[30px]">
      <div className="w-full h-[150px] bg-specialwhite drop-shadow-threeDboxOuter rounded-l-full rounded-r-2xl overflow-hidden">
        <img src={avatar} className="w-[150px] h-[150px] rounded-full" alt="" />
      </div>
      <div className="absolute top-2 right-2">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">
            Item moved successfully.
          </div>
          <Toast.Toggle />
        </Toast>
      </div>
    </div>
  );
};

export default AdminDashboard;
