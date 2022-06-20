import avatar from "../../../Assets/Images/avatars/avatar1.jpg";

const AdminDashboard = () => {
  return (
    <div className="w-full p-[30px]">
      <div className="w-full h-[150px] bg-specialwhite drop-shadow-threeDboxOuter rounded-l-full rounded-r-2xl overflow-hidden">
        <img src={avatar} className="w-[150px] h-[150px] rounded-full" alt="" />
      </div>
    </div>
  );
};

export default AdminDashboard;
