import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="w-full grid grid-cols-[200px_auto]">
      <div>layout</div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
