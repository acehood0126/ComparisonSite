import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import AdminHeader from "../../Header/Admin";

const AdminLayout = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[230px_auto] bg-specialwhite text-darkblue">
      <Sidebar />
      <div className="w-full">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
