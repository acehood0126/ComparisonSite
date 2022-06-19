import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AdminDashboard from "../Pages/Admin/Dashboard";
import SignIn from "../Pages/Admin/SignIn";
import SignUp from "../Pages/Admin/SignUp";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Welcome!</>}></Route>
        <Route path="/admin" element={<SignIn />} />
        <Route path="/admin/signin" element={<SignIn />} />
        <Route path="/admin/signup" element={<SignUp />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
