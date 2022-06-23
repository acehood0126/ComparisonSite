import { useNavigate } from "react-router-dom";
import avatar from "../../../Assets/Images/avatars/avatar1.jpg";

const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[60px] px-[20px] bg-transparent flex justify-end items-center">
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/", { replace: true });
        }}
      >
        <img src={avatar} alt="" className="w-[30px] h-[30px] rounded-full" />
      </button>
    </div>
  );
};

export default AdminHeader;
