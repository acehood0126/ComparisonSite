import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*Admin*/
import AdminDashboard from "../Pages/Admin/Dashboard";
import AdminLayout from "../Layouts/Main/Admin";
import SignIn from "../Pages/Admin/SignIn";
import SignUp from "../Pages/Admin/SignUp";

/*Client*/
import SelectCompany from "../Pages/Client/Company";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectCompany />}></Route>
        <Route path="/admin" element={<SignIn />} />
        <Route path="/admin/signin" element={<SignIn />} />
        <Route path="/admin/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
