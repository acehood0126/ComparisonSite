import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const AdminLayout = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[250px_auto] bg-gradient-to-bl from-lightpink to-lightpurple text-darkblue">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
