import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminDashboard from "../Pages/Admin/Dashboard";
import SignIn from "../Pages/Admin/Signin";
import SignUp from "../Pages/Admin/Signup";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={(["/admin"], ["/admin/signin"])} element={<SignIn />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
