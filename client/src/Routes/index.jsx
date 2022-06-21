import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
// import { useEffect } from "react";
// import nprogress from "nprogress";

/*Admin*/
import AdminDashboard from "../Pages/Admin/Dashboard";
import AdminCompanies from "../Pages/Admin/Companies";
import AdminProducts from "../Pages/Admin/Products";
import Users from "../Pages/Admin/Users";
import Tracking from "../Pages/Admin/Tracking";
import AdminLayout from "../Layouts/Main/Admin";
import SignIn from "../Pages/Admin/SignIn";
import SignUp from "../Pages/Admin/SignUp";
/*Client*/
import SelectCompany from "../Pages/Client/Company";

const AllRoutes = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   nprogress.start();
  //   nprogress.done();
  // }, [location.pathname]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectCompany />}></Route>
        <Route path="/admin" element={<SignIn />} />
        <Route path="/admin/signin" element={<SignIn />} />
        <Route path="/admin/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/companies" element={<AdminCompanies />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
